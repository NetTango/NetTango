// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

class VersionUtils {

  static maybeForEach(o: any, prop: string, func: (item: any) => void): void {
    if (o.hasOwnProperty(prop) && Array.isArray(o[prop])) {
      for (var item of o[prop]) {
        func(item)
      }
    }
  }

  static updateBlocks(json: any, blockDefinitionHandler: (block: any) => void, blockInstanceHandler: (block: Object) => void): void {
    if (!json.hasOwnProperty("blocks") || !Array.isArray(json["blocks"])) {
      return
    }

    for (var b of json["blocks"]) {
      blockDefinitionHandler(b)
    }

    if (!json.hasOwnProperty("program") || typeof(json["program"]) !== "object") {
      return
    }

    const program: any = json["program"]
    VersionUtils.maybeForEach(program, "chains", (chain) => {
      VersionUtils.maybeForEach(chain, "blocks", (b) => {
        blockInstanceHandler(b)
        // the `children` property was removed in version 5, but this should be harmless to
        // leave in as it checks the existence of the property first.  This line can be
        // removed the next time a big structure change requires changing `updateBlocks()`.
        // -Jeremy B July 2020
        VersionUtils.maybeForEach(b, "children", (child) => blockInstanceHandler(child))

        VersionUtils.maybeForEach(b, "clauses", (clause) => {
          VersionUtils.maybeForEach(clause, "children", (child) => blockInstanceHandler(child))
        })
      })
    })

  }

  /// the data structure changed for version 4, so this remains for updating version 3 or
  /// earlier files.
  static updateBlocks3(json: any, blockDefinitionHandler: (block: any) => void, blockInstanceHandler: (block: any) => void): void {
    if (!json.hasOwnProperty("blocks") || !Array.isArray(json["blocks"])) {
      return
    }

    for (var b of json["blocks"]) {
      blockDefinitionHandler(b)
    }

    // it's possible we want all the block definition updates done before processing any children
    // so run through them again.  -Jeremy B August 2019
    for (var b of json["blocks"]) {
      VersionUtils.maybeForEach(b, "children", (child) => blockInstanceHandler(child))
      VersionUtils.maybeForEach(b, "clauses", (clause) => {
        VersionUtils.maybeForEach(clause, "children", (child) => blockInstanceHandler(child))
      })
    }

    if (!json.hasOwnProperty("program") || typeof(json["program"]) !== "object") {
      return
    }

    const program = json["program"]
    VersionUtils.maybeForEach(program, "chains", (chain) => {
      for (var b of chain) {
        blockInstanceHandler(b)
      }
    })
  }

  static updateBlockAttributes(b: any, attributesHandler: (items: any[]) => void): void {
    if (b.hasOwnProperty("params") && Array.isArray(b["params"])) {
      attributesHandler(b["params"])
    }

    if (b.hasOwnProperty("properties") && Array.isArray(b["properties"])) {
      attributesHandler(b["properties"])
    }
  }

}
