// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { Block } from "../block";

abstract class AllowedTags {
  abstract check(blocks: Block[]): boolean
}

export { AllowedTags }
