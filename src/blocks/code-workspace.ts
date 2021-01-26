// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import type { InteractEvent } from '@interactjs/core/InteractEvent'
import interact from "interactjs"

import { FormatAttributeType } from "../ntango"
import { NetTango } from "../ntango-shim"
import { ExternalStorage } from "../utils/external-storage"
import { NumUtils } from "../utils/num-utils"
import { VersionManager } from "../versions/version-manager"
import { Block } from "./block"
import { BlockMenu } from "./block-menu"
import { BlockStyle } from "./block-style"
import { Chain } from "./chain"
import { CodeFormatter } from "./code-formatter"
import { DragListener } from "./drag-drop/drag-listener"
import { DragManager } from "./drag-drop/drag-manager"
import { ExpressionDefinition } from "./expressions/expression-definition"
import { BlockChangedEvent, ProgramChangedEvent } from "./program-changed-event"

class CodeWorkspace {

  static readonly DEFAULT_HEIGHT = 600
  static readonly DEFAULT_WIDTH = 450

  readonly storage = new ExternalStorage(["version", "height", "width", "blocks", "program", "chainOpen", "chainClose", "blockStyles", "variables", "expressions"])

  readonly version = VersionManager.VERSION

  /// HTML Canvas ID
  containerId: string
  backdrop: HTMLDivElement = document.createElement("div")
  dialog: HTMLDivElement = document.createElement("div")
  container: HTMLDivElement = document.createElement("div")
  spaceDiv: HTMLDivElement = document.createElement("div")
  chainsDiv: HTMLDivElement = document.createElement("div")

  formatter: CodeFormatter

  chainOpen: string | null = null
  chainClose: string | null = null

  chains: Chain[] = []

  nextBlockId: number = 0
  nextBlockInstanceId: number = 0

  /// block menu
  menu: BlockMenu

  /// global variable definitions and types
  variables: string[] = []

  /// list of expressions
  expressionDefinitions: ExpressionDefinition[] = []

  _height = CodeWorkspace.DEFAULT_HEIGHT
  get height(): number { return this._height }
  set height(h: number) {
    this._height = h
    this.container.style.minHeight = `${this.height}px`
  }
  currentHeight = CodeWorkspace.DEFAULT_HEIGHT

  _width = CodeWorkspace.DEFAULT_WIDTH
  get width(): number { return this._width }
  set width(w: number) {
    this._width = w
    this.container.style.minWidth = `${this.width}px`
    this.container.style.maxWidth = `${this.width}px`
  }

  starterBlockStyle: BlockStyle
  containerBlockStyle: BlockStyle
  commandBlockStyle: BlockStyle

  readonly dragManager = new DragManager(this)

  constructor(containerId: string, formatter: CodeFormatter) {
    this.containerId = containerId
    this.formatter = formatter

    const maybeContainer = document.querySelector(`#${containerId}`)
    if (maybeContainer === null) throw new Error(`No container element with ID ${this.containerId} found.`)
    this.container = maybeContainer as HTMLDivElement
    this.container.innerHTML = ""
    this.container.classList.add("nt-container")

    this.starterBlockStyle   = BlockStyle.DEFAULT_STARTER_STYLE
    this.containerBlockStyle = BlockStyle.DEFAULT_CONTAINER_STYLE
    this.commandBlockStyle   = BlockStyle.DEFAULT_COMMAND_STYLE

    this.container.style.minHeight = `${this.height}px`
    this.container.style.minWidth  = `${this.width}px`
    this.container.style.maxWidth  = `${this.width}px`

    this.menu = new BlockMenu(this)

  }

  unload(): void {
    this.chains.splice(0)
  }

  programChanged(event: ProgramChangedEvent): void {
    try {
      this._updateWorkspaceForChanges()
      NetTango._relayCallback(this.containerId, event.toJS())
    } catch (e) {
      console.log("Unable to relay program changed event to Javascript")
      console.log(e)
    }
  }

  exportCode(formatAttributeOverride: FormatAttributeType | null = null): string {
    return this.formatter.formatCode(this, true, formatAttributeOverride)
  }

  getBlockCount(id: number): number {
    if (this.chains.length === 0) {
      return 0
    }
    return NumUtils.sum(this.chains.map( (c) => c.getBlockCount(id) ))
  }

  getBlockInstance(instanceId: number): Block {
    for (var chain of this.chains) {
      const block = chain.getBlockInstance(instanceId)
      if (block !== null) {
        return block
      }
    }
    throw new Error(`Block with given instance ID not found in workspace: ${instanceId}`)
  }

  draw(): void {
    const styleId = `${this.containerId}-styles`
    var style = document.getElementById(styleId)
    if (style === null) {
      style = document.createElement("style")
      style.id = styleId
      this.container.append(style)
    }
    const styleSheet = (style as HTMLStyleElement).sheet!
    // the style sheet remains during a re-init of workspaces, so clear it
    while (styleSheet.cssRules.length > 0) {
      styleSheet.removeRule(0)
    }

    this.starterBlockStyle.appendToSheet(styleSheet, `${this.containerId}-block-starter`)
    this.containerBlockStyle.appendToSheet(styleSheet, `${this.containerId}-block-container`)
    this.commandBlockStyle.appendToSheet(styleSheet, `${this.containerId}-block-command`)

    const wrapper = document.createElement("div")
    wrapper.classList.add("nt-workspace-wrapper")
    this.container.append(wrapper)

    DragListener.dragImage.classList.add("nt-block-drag")
    DragListener.dragImage.classList.add("nt-chain")
    wrapper.append(DragListener.dragImage)

    this.backdrop.className = "nt-attribute-backdrop"
    this.backdrop.addEventListener("click", (e) => this.backdrop.classList.remove("show") )
    this.dialog = document.createElement("div")
    this.dialog.className = "nt-attribute-dialog"
    this.dialog.addEventListener("click", (e) => e.stopPropagation() )
    this.backdrop.append(this.dialog)
    this.container.append(this.backdrop)

    this.spaceDiv = document.createElement("div")
    this.spaceDiv.id = `${this.containerId}-space`
    this.spaceDiv.classList.add("nt-workspace")

    wrapper.append(this.spaceDiv)

    this.chainsDiv = document.createElement("div")
    this.spaceDiv.append(this.chainsDiv)

    for (var i = 0; i < this.chains.length; i++) {
      const chain = this.chains[i]
      chain.draw(i)
    }

    this.redrawChains()

    const menuDiv = this.menu.draw()
    menuDiv.style.maxHeight = `${this.height}px`
    wrapper.append(menuDiv)

    const spaceDropzone = interact(this.spaceDiv).dropzone({
        accept: ".nt-menu-slot, .nt-block, .nt-cap, .nt-notch"
      , checker: (_1, _2, dropped) => this.checker(dropped)
    })

    spaceDropzone.on("dragenter", () => {
      console.log("enter workspace")
      const dragManager = DragManager.getCurrent()
      dragManager.isOverWorkspace = true
      this.menu.updateDragOver()
    })

    spaceDropzone.on("dragover", () => this.updateDragOver() )

    spaceDropzone.on("dragleave", () => {
      console.log("leave workspace")
      const dragManager = DragManager.getCurrent()
      dragManager.isOverWorkspace = false
      this.updateDragOver()
      this.menu.updateDragOver()
    })

    spaceDropzone.on("drop", (e) => this.drop(e) )

    const containerDropzone = interact(this.container).dropzone({
        accept:  ".nt-menu-slot, .nt-block, .nt-cap, .nt-notch"
      , checker: (_1, _2, dropped) => this.checker(dropped)
    })

    containerDropzone.on("dragenter", () => {
      console.log("enter container")
      const dragManager = DragManager.getCurrent()
      dragManager.isOverContainer = true
      this.menu.updateDragOver()
    })

    containerDropzone.on("dragleave", () => {
      console.log("leave container")
      const dragManager = DragManager.getCurrent()
      dragManager.isOverContainer = false
      this.menu.updateDragOver()
    })

    containerDropzone.on("drop", () => this.containerDrop() )

    this.updateWorkspaceHeight()
  }

  checker(dropped: boolean): boolean {
    const dragManager = DragManager.getCurrent()
    return dropped && !dragManager.wasHandled && this.containerId === dragManager.workspace.containerId
  }

  drop(event: InteractEvent): void {
    console.log("drop workspace")
    const dragManager = DragManager.getCurrent()
    dragManager.wasHandled = true

    this.dragManager.clearDraggingClasses()
    const blocks = this.dragManager.consumeDraggingBlocks()
    const offset = DragListener.getOffsetToRoot(this.chainsDiv)
    // The casts here are necessary I believe because the type defs are wrong, `dragEvent` does exist on the
    // `InteractEvent` when a drop occurs. -Jeremy B January 2020
    const dropX = ((event as any).dragEvent.page.x as number) - offset.x - dragManager.dragStartOffset.x
    const dropY = ((event as any).dragEvent.page.y as number) - offset.y - dragManager.dragStartOffset.y
    this.createChain(blocks, Math.max(dropX, 0), Math.max(dropY, 0))

    const changedBlock = blocks[0]
    this.programChanged(new BlockChangedEvent(changedBlock))
  }

  containerDrop(): void {
    console.log("drop container")
    const dragManager = DragManager.getCurrent()
    dragManager.wasHandled = true

    this.dragManager.clearDraggingClasses()
    const oldBlocks = this.dragManager.consumeDraggingBlocks()

    const changedBlock = oldBlocks[0]
    this.programChanged(new BlockChangedEvent(changedBlock))
  }

  createChain(newBlocks: Block[], x: number, y: number): void {
    const newChainIndex = this.chains.length
    const newChain = new Chain(this, newChainIndex)
    this.chains.push(newChain)
    const chainDiv = newChain.draw(newChainIndex)
    this.spaceDiv.append(chainDiv)
    newChain.addBlocks(newBlocks)
    newChain.updatePosition(x, y)
  }

  removeChain(chainIndex: number): void {
    const chain = this.chains[chainIndex]
    this.chains.splice(chainIndex, 1)
    chain.div.remove()

    for (var i = 0; i < this.chains.length; i++) {
      const chain = this.chains[i]
      chain.resetDragData(i)
    }
  }

  redrawChains(): void {
    const sortedChains = this.chains.slice(0)
    sortedChains.sort((c1, c2) =>  c1.y - c2.y)
    this.chainsDiv.innerHTML = ""
    for (var chain of sortedChains) {
      this.chainsDiv.append(chain.div)
    }
  }

  enableDropZones(): void {
    for (var chain of this.chains) {
      chain.enableDropZones()
    }
  }

  disableDropZones(): void {
    for (var chain of this.chains) {
      chain.disableDropZones()
    }
  }

  updateDragOver(): void {
    console.log("updateDragOver()")
    for (var chain of this.chains) {
      chain.updateDragOver()
    }
  }

  clearDragOver(): void {
    for (var chain of this.chains) {
      chain.clearDragOver()
    }
    this.menu.updateDragOver()
  }

  _updateWorkspaceForChanges(): void {
    this.updateWorkspaceHeight()
    this.resetBlockActionText()
    this.menu.updateLimits()
  }

  updateWorkspaceHeight(): void {
    var maxHeight = this.height; // start with the minimum height from the model
    const containerRect = this.container.getBoundingClientRect()
    for (var chain of this.chains) {
      const rect = chain.div.getBoundingClientRect()
      const childHeight = Math.ceil(rect.bottom - containerRect.top)
      if (childHeight > maxHeight) {
        maxHeight = childHeight
      }
    }
    this.currentHeight = maxHeight + 1
    const newHeight = `${this.currentHeight}px`
    this.spaceDiv.style.minHeight = newHeight
    this.menu.menuDiv.style.maxHeight = newHeight
  }

  resetBlockActionText(): void {
    for (var chain of this.chains) {
      for (var block of chain.blocks) {
        block.resetBlockActionText()
      }
    }
  }

  removeEventListeners(): void {
    // containerDropzone.destroy()
  }

}

export { CodeWorkspace }
