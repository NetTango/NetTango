// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { IntAttributeInput, NumberValueInput } from "../../types/types"
import { Block } from "../block-instance"
import { NumAttribute } from "./num-attribute"

//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntAttribute extends NumAttribute {

  constructor(def: IntAttributeInput, ia: NumberValueInput, block: Block) {
    super(def, ia, block)
  }

}

export { IntAttribute }
