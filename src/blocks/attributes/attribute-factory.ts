// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { AttributeInput } from "../../types/types"
import { Block } from "../block"
import { Attribute } from "./attribute"
import { ExpressionAttribute } from "./expression-attribute"
import { IntAttribute } from "./int-attribute"
import { RangeAttribute } from "./range-attribute"
import { SelectAttribute } from "./select-attribute"
import { TextAttribute } from "./text-attribute"

function createAttribute(a: AttributeInput, block: Block, isSlotBlock: boolean): Attribute {
  switch (a.type) {
    case 'text':
      return new TextAttribute(a, block, isSlotBlock)

    case 'int':
      return new IntAttribute(a, block, isSlotBlock)

    case 'range':
      return new RangeAttribute(a, block, isSlotBlock)

    case 'select':
      return new SelectAttribute(a, block, isSlotBlock)

    case 'num':
    case 'bool':
      return new ExpressionAttribute(a, block, isSlotBlock)
  }
}

export { createAttribute }
