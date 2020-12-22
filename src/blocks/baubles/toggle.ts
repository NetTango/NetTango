// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class Toggle {

  div: HTMLDivElement

  onGlyph = "\u25B2"
  offGlyph = "\u25BC"
  isOn: boolean
  onChange: (b: boolean) => void

  constructor(isOn: boolean, onChange: (b: boolean) => void) {
    this.isOn = isOn
    this.onChange = onChange
    this.div = new HTMLDivElement()
    this.div.classList.add("nt-toggle")
    this.div.innerText = isOn ? this.onGlyph : this.offGlyph
    this.div.addEventListener("click", this.click)
  }

  click(event: MouseEvent): void {
    event.stopPropagation()
    this.toggle()
  }

  toggle(): void {
    this.isOn = !this.isOn
    this.div.innerText = this.isOn ? this.onGlyph : this.offGlyph
    this.onChange(this.isOn)
  }

}

export { Toggle }