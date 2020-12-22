// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block"
import { Attribute, AttributeTypes } from "./attribute"
import { NumAttribute } from "./num-attribute"

//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntAttribute extends NumAttribute {

  get type(): AttributeTypes { return "int" }

  constructor(block: Block, id: number) {
    super(block, id)
    this.stepSize = 1
  }

  static clone(block: Block, source: IntAttribute, isSlotBlock: boolean): IntAttribute {
    const clone = new IntAttribute(block, source.id)
    NumAttribute.clone(block, source, isSlotBlock, clone)
    return clone
  }

  clone(block: Block, isSlotBlock: boolean): Attribute {
    return IntAttribute.clone(block, this, isSlotBlock)
  }

}

export { IntAttribute }