/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
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
  final int blockId;
  final int instanceId;

  BlockChangedEvent(int this.blockId, int this.instanceId);

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
  final dynamic value;

  AttributeChangedEvent(int this.blockId, int this.instanceId, int this.attributeId, dynamic this.value);

  dynamic toJS() {
    return js.JsObject.jsify({
      "type": type,
      "blockId": blockId,
      "instanceId": instanceId,
      "attributeId": attributeId,
      "value": value
    });
  }

}
