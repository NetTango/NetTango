/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

part of NetTango;

abstract class ProgramChangedEvent {
  dynamic toJS();
}

class BlockChangedEvent extends ProgramChangedEvent {
  final String type = "block-changed";
  int blockId;
  int instanceId;

  BlockChangedEvent(Block block) {
    this.blockId = block.id;
    this.instanceId = block.instanceId;
  }

  dynamic toJS() {
    return js.JsObject.jsify({
      "type": type,
      "blockId": blockId,
      "instanceId": instanceId
    });
  }
}

class AttributeChangedEvent extends ProgramChangedEvent {
  final String type = "attribute-changed";
  final int blockId;
  final int instanceId;
  final int attributeId;
  final String attributeType;
  final dynamic value;
  final String formattedValue;

  AttributeChangedEvent(int this.blockId, int this.instanceId, int this.attributeId, String this.attributeType, dynamic this.value, String this.formattedValue);

  dynamic toJS() {
    return js.JsObject.jsify({
      "type": type,
      "blockId": blockId,
      "instanceId": instanceId,
      "attributeId": attributeId,
      "attributeType": attributeType,
      "value": value,
      "formattedValue": formattedValue
    });
  }

}

class MenuItemClickedEvent extends ProgramChangedEvent {
  final String type = "menu-item-clicked";
  final int blockId;

  MenuItemClickedEvent(int this.blockId);

  dynamic toJS() {
    return js.JsObject.jsify({
      "type": type,
      "blockId": blockId
    });
  }

}

class MenuItemContextMenuEvent extends ProgramChangedEvent {
  final String type = "menu-item-context-menu";
  final int blockId;
  final int x, y;

  MenuItemContextMenuEvent(int this.blockId, int this.x, int this.y);

  dynamic toJS() {
    return js.JsObject.jsify({
      "type": type,
      "blockId": blockId,
      "x": x,
      "y": y
    });
  }

}
