// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { AllowedTags } from "./allowed-tags";

abstract class ConcreteTags extends AllowedTags {
  abstract clone(): ConcreteTags
}

export { ConcreteTags }