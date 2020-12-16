// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class CodeWorkspace {

  // final storage = new ExternalStorage(["version", "height", "width", "blocks", "program", "chainOpen", "chainClose", "blockStyles", "variables", "expressions"])

  // static int DEFAULT_HEIGHT = 600
  // static int DEFAULT_WIDTH = 450

  // int version = VersionManager.VERSION

  // /// HTML Canvas ID
  containerId: string
  backdrop: HTMLDivElement = new HTMLDivElement()
  dialog: HTMLDivElement = new HTMLDivElement()
  // DivElement container, spaceDiv, chainsDiv

  formatter: CodeFormatter

  // String chainOpen
  // String chainClose

  chains: Chain[] = []

  nextBlockId: number = 0
  nextBlockInstanceId: number = 0

  // /// block menu
  // BlockMenu menu

  /// global variable definitions and types
  variables: string[] = []

  /// list of expressions
  expressionDefinitions: ExpressionDefinition[] = []

  // int _height = DEFAULT_HEIGHT
  // int get height => _height
  // set height(int h) {
  //   _height = h
  //   container.style.minHeight = "${height}px"
  // }
  // int currentHeight = DEFAULT_HEIGHT

  // int _width = DEFAULT_WIDTH
  // int get width => _width
  // set width(int w) {
  //   _width = w
  //   container.style.minWidth = "${width}px"
  //   container.style.maxWidth = "${width}px"
  // }

  // BlockStyle starterBlockStyle
  // BlockStyle containerBlockStyle
  // BlockStyle commandBlockStyle

  // final DragImage dragImage = new DragImage()
  // DragManager dragManager
  // WorkspaceAcceptor acceptor
  // Dropzone containerDropzone

  constructor(containerId: string, formatter: CodeFormatter) {
    this.containerId = containerId
    this.formatter = formatter

  //   container = querySelector("#${containerId}")
  //   if (container == null) throw "No container element with ID $containerId found."
  //   container.setInnerHtml("")
  //   container.classes.add("nt-container")

  //   this.dragManager = DragManager(this, this.dragImage)
  //   this.acceptor    = WorkspaceAcceptor(this.containerId)

  //   containerDropzone = Dropzone(container, acceptor: this.acceptor)
  //   containerDropzone.onDrop.listen(containerDrop)

  //   starterBlockStyle   = BlockStyle.DEFAULT_STARTER_STYLE
  //   containerBlockStyle = BlockStyle.DEFAULT_CONTAINER_STYLE
  //   commandBlockStyle   = BlockStyle.DEFAULT_COMMAND_STYLE

  //   container.style.minHeight = "${height}px"
  //   container.style.minWidth  = "${width}px"
  //   container.style.maxWidth  = "${width}px"

  //   menu = new BlockMenu(this)

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

  // int getBlockCount(int id) {
  //   if (chains.isEmpty) {
  //     return 0
  //   }
  //   return NumUtils.sum(chains.map( (c) => c.getBlockCount(id) ))
  // }

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
  //   String styleId = "$containerId-styles"
  //   StyleElement style = document.getElementById(styleId)
  //   if (style == null) {
  //     style = new StyleElement() .. id = styleId
  //     container.append(style)
  //   }
  //   CssStyleSheet styleSheet = style.sheet
  //   // the style sheet remains during a re-init of workspaces, so clear it
  //   while (styleSheet.cssRules.length > 0) {
  //     styleSheet.removeRule(0)
  //   }

  //   starterBlockStyle.appendToSheet(styleSheet, "$containerId-block-starter")
  //   containerBlockStyle.appendToSheet(styleSheet, "$containerId-block-container")
  //   commandBlockStyle.appendToSheet(styleSheet, "$containerId-block-command")

  //   final wrapper = new DivElement()
  //   wrapper.classes.add("nt-workspace-wrapper")
  //   container.append(wrapper)

  //   final drag = dragImage.element
  //   drag.classes.add("nt-block-drag")
  //   drag.classes.add("nt-chain")
  //   wrapper.append(drag)

    this.backdrop.className = "nt-attribute-backdrop"
  //   backdrop.onClick.listen( (e) => backdrop.classes.remove("show") )
  //   dialog = new DivElement() .. className = "nt-attribute-dialog"
  //   dialog.onClick.listen( (e) => e.stopPropagation() )
  //   backdrop.append(dialog)
  //   container.append(backdrop)

  //   spaceDiv = new DivElement() .. id = "$containerId-space"
  //   spaceDiv.classes.add("nt-workspace")

  //   wrapper.append(spaceDiv)

  //   chainsDiv = new DivElement()
  //   spaceDiv.append(chainsDiv)

  //   for (int i = 0; i < chains.length; i++) {
  //     Chain chain = chains[i]
  //     chain.draw(dragImage, i)
  //   }

  //   redrawChains()

  //   final menuDiv = menu.draw(dragImage)
  //   menuDiv.style.maxHeight = "${height}px"
  //   wrapper.append(menuDiv)

  //   final spaceDropzone = Dropzone(spaceDiv, acceptor: this.acceptor)
  //   spaceDropzone.onDragEnter.listen( (e) {
  //     DragManager.current.isOverWorkspace = true
  //     menu.updateDragOver()
  //   })
  //   spaceDropzone.onDragOver.listen( (e) => this.updateDragOver() )
  //   spaceDropzone.onDragLeave.listen( (e) {
  //     DragManager.current.isOverWorkspace = false
  //     this.updateDragOver()
  //     menu.updateDragOver()
  //   })
  //   spaceDropzone.onDrop.listen(drop)

  //   containerDropzone.onDragEnter.listen( (e) {
  //     DragManager.current.isOverContainer = true
  //     menu.updateDragOver()
  //   })
  //   containerDropzone.onDragLeave.listen( (e) {
  //     DragManager.current.isOverContainer = false
  //     menu.updateDragOver()
  //   })

  //   updateWorkspaceHeight()
  }

  // void drop(DropzoneEvent event) {
  //   DragManager.current.wasHandled = true

  //   final blocks = this.dragManager.consumeDraggingBlocks()
  //   final offset = DragImage.getOffsetToRoot(this.chainsDiv)
  //   final dropLocation = event.position - offset - DragManager.current.dragStartOffset
  //   createChain(blocks, max(0, dropLocation.x.floor()), max(0, dropLocation.y.floor()))

  //   Block changedBlock = blocks.elementAt(0)
  //   programChanged(new BlockChangedEvent(changedBlock))
  // }

  // void containerDrop(DropzoneEvent event) {
  //   DragManager.current.wasHandled = true

  //   final oldBlocks = this.dragManager.consumeDraggingBlocks()

  //   Block changedBlock = oldBlocks.elementAt(0)
  //   programChanged(new BlockChangedEvent(changedBlock))
  // }

  // void createChain(Iterable<Block> newBlocks, int x, int y) {
  //   Chain newChain = new Chain(this)
  //   int newChainIndex = chains.length
  //   chains.add(newChain)
  //   DivElement chainDiv = newChain.draw(dragImage, newChainIndex)
  //   spaceDiv.append(chainDiv)
  //   newChain.addBlocks(newBlocks)
  //   newChain.updatePosition(x, y)
  // }

  // void removeChain(int chainIndex) {
  //   Chain chain = this.chains[chainIndex]
  //   this.chains.removeAt(chainIndex)
  //   chain.div.remove()

  //   for (int i = 0; i < this.chains.length; i++) {
  //     Chain chain = this.chains[i]
  //     chain.resetDragData(i)
  //   }
  // }

  // void redrawChains() {
  //   final sortedChains = chains.toList()
  //   sortedChains.sort((c1, c2) => c1.y.compareTo(c2.y))
  //   chainsDiv.innerHtml = ""
  //   for (Chain chain in sortedChains) {
  //     chainsDiv.append(chain.div)
  //   }
  // }

  // void enableDropZones() {
  //   for (Chain chain in chains) {
  //     chain.enableDropZones()
  //   }
  // }

  // void disableDropZones() {
  //   for (Chain chain in chains) {
  //     chain.disableDropZones()
  //   }
  // }

  // void updateDragOver() {
  //   for (Chain chain in chains) {
  //     chain.updateDragOver()
  //   }
  // }

  // void clearDragOver() {
  //   for (Chain chain in chains) {
  //     chain.clearDragOver()
  //   }
  //   menu.updateDragOver()
  // }

  _updateWorkspaceForChanges(): void {
    // updateWorkspaceHeight()
    // resetBlockActionText()
    // this.menu.updateLimits()
  }

  // void updateWorkspaceHeight() {
  //   int maxHeight = height; // start with the minimum height from the model
  //   final containerRect = container.getBoundingClientRect()
  //   for (Chain chain in chains) {
  //     final rect = chain.div.getBoundingClientRect()
  //     final childHeight = (rect.bottom - containerRect.top).ceil()
  //     if (childHeight > maxHeight) {
  //       maxHeight = childHeight
  //     }
  //   }
  //   currentHeight = maxHeight + 1
  //   final newHeight = "${currentHeight}px"
  //   spaceDiv.style.minHeight = newHeight
  //   menu.menuDiv.style.maxHeight = newHeight
  // }

  // void resetBlockActionText() {
  //   for (Chain chain in chains) {
  //     for (Block block in chain.blocks) {
  //       block.resetBlockActionText()
  //     }
  //   }
  // }

  removeEventListeners(): void {
    // containerDropzone.destroy()
  }

}
