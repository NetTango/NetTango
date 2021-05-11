// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { IntAttribute, NumberValue } from "../../types/types"
import { BlockInstanceUI } from "../block-instance"
import { NumAttributeUI } from "./num-attribute"

//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntAttributeUI extends NumAttributeUI {

  constructor(def: IntAttribute, ia: NumberValue, block: BlockInstanceUI) {
    super(def, ia, block)
  }

}

export { IntAttributeUI }
