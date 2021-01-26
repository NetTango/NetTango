// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import interact from "interactjs"
import type { InteractEvent } from '@interactjs/core/InteractEvent'
import type { DraggableOptions, Point } from '@interactjs/types/index'

class DragListener {

  static readonly ZERO_POINT: Point = Object.freeze({ x: 0, y: 0 })

  private static _dragImage: HTMLDivElement | null = null
  static readonly dragImage: HTMLDivElement = (function() {
    if (DragListener._dragImage !== null) {
      return DragListener._dragImage
    }
    DragListener._dragImage = document.createElement("div")
    DragListener._dragImage.id = "nt-drag-image"
    DragListener._dragImage.classList.add("nt-block-drag")
    return DragListener._dragImage
  }())
  private static zeroTopLeft: Point | null = null

  readonly sourceElement: HTMLElement
  readonly draggingClass: string | null
  readonly cancelClass: string | null

  start = (e: InteractEvent) => { }
  end   = (e: InteractEvent) => { }

  private position: Point

  constructor(sourceElement: HTMLElement, draggingClass: string | null = null, cancelClass: string | null = null) {
    this.sourceElement = sourceElement
    this.draggingClass = draggingClass
    this.cancelClass   = cancelClass
    interact(sourceElement).draggable(this.makeOptions())
    this.position = DragListener.ZERO_POINT
  }

  private startEx(e: InteractEvent): void {
    const offset = DragListener.getOffsetToRoot(this.sourceElement)

    DragListener.dragImage.style.left = "0px"
    DragListener.dragImage.style.top  = "0px"
    DragListener.zeroTopLeft = DragListener.getOffsetToRoot(DragListener.dragImage)

    DragListener.dragImage.style.left = `${offset.x - DragListener.zeroTopLeft.x}px`
    DragListener.dragImage.style.top  = `${offset.y - DragListener.zeroTopLeft.y}px`
    DragListener.dragImage.style.visibility = "visible"

    if (this.draggingClass !== null) {
      this.sourceElement.classList.add(this.draggingClass)
    }

    this.position = DragListener.ZERO_POINT

    this.start(e)
  }

  private moveEx(e: InteractEvent): void {
    this.position = { x: this.position.x + e.dx, y: this.position.y + e.dy }
    DragListener.dragImage.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`
  }

  private endEx(e: InteractEvent): void {
    (["left", "top", "transform", "visibility"]).forEach( (property) =>
      DragListener.dragImage.style.removeProperty(property)
    )
    this.end(e)
  }

  private makeOptions(): DraggableOptions {
    const options: DraggableOptions = {
      listeners: {
          "start": (e) => this.startEx(e)
        , "move":  (e) => this.moveEx(e)
        , "end":   (e) => this.endEx(e)
      }
    }
    if (this.cancelClass !== null) { options.ignoreFrom = `.${this.cancelClass}` }
    return options
  }

  static getOffsetToRoot(element: HTMLElement): Point {
    const offset = { x: element.offsetLeft, y: element.offsetTop }
    if (element.offsetParent === null) {
      return offset
    }
    const parentOffset = DragListener.getOffsetToRoot(element.offsetParent as HTMLElement)
    return { x: offset.x + parentOffset.x, y: offset.y + parentOffset.y }
  }

}

export { DragListener }
