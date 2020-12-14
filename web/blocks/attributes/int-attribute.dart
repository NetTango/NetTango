// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

part of NetTango;

//-------------------------------------------------------------------------
/// Represents an integer parameter
//-------------------------------------------------------------------------
class IntAttribute extends NumAttribute {

  String get type => "int";

  IntAttribute(Block block, int id) : super(block, id) { stepSize = 1; }

  IntAttribute.clone(Block block, IntAttribute source, bool isSlotBlock) : super.clone(block, source, isSlotBlock);

  Attribute clone(Block block, bool isSlotBlock) {
    return IntAttribute.clone(block, this, isSlotBlock);
  }

}
