// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class StringBuffer {

  lines: string[][] = []

  write(chunk: string): void {
    if (this.lines.length === 0) {
      this.lines.push([])
    }
    this.lines[this.lines.length - 1].push(chunk)
  }

  toString(): string {
    return this.lines.map( (line) => line.join("") ).join("\n")
  }

}