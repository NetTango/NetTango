// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { IntAttributeInput } from "../../types/types"
import { Block } from "../block"
import { NumAttribute } from "./num-attribute"

//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntAttribute extends NumAttribute {

  constructor(ia: IntAttributeInput, block: Block, isSlotBlock: boolean) {
    super(ia, block, isSlotBlock)
  }

}

export { IntAttribute }
