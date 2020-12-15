// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class Arrow {

  static draw(): HTMLDivElement {
    const arrow = new HTMLDivElement()
    arrow.innerText = "➔"
    arrow.classList.add("nt-arrow")
    return arrow
  }

}
