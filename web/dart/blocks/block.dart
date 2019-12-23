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

final num SCALE = window.devicePixelRatio;

/**
 * Visual programming block
 */
class Block {

  /// unique block ID number per workspace
  int id;

  /// unqiue block ID number per instance in a program chain
  int instanceId;

  /// text displayed on the block
  String action;

  /// language specific command type used by code formatters (e.g. nlogo:command)
  var type;

  /// formatting hint to help translate the parse tree into source code.
  /// parameters can be referenced using python format syntax. e.g.
  /// "if random 100 > {0}"
  String format;

  /// block dimensions and position
  num x = 0.0, y = 0.0;

  /// parameters for this block (optional)
  Map<int, Parameter> params = new Map<int, Parameter>();

  /// properties for this block (optional)
  /// properties are just named paramters that get listed vertically
  Map<int, Parameter> properties = new Map<int, Parameter>();

  int nextParamId = 0;

  List<Block> children = new List<Block>();
  List<Chain> clauses = new List<Chain>();

  /// CSS color of the block
  String blockColor = '#6b9bc3'; //'#d2584a';

  /// CSS color of the text
  String textColor = 'white';

  /// CSS border color of the block
  String borderColor = "rgba(255, 255, 255, 0.6)";

  /// CSS font spec
  String font = "400 ${14 * SCALE}px 'Poppins', sans-serif";

  /// Tells a code formatter that at least one block of this type is required
  bool required = false;

  /// link back to the main workspace
  CodeWorkspace workspace;

  bool get hasParams => params.isNotEmpty;

  bool get hasProperties => properties.isNotEmpty;

  Block(this.workspace, this.id, this.action) {
    if (this.id == null) {
      this.id = this.workspace.nextBlockId;
      this.workspace.nextBlockId++;
    } else if (this.id >= this.workspace.nextBlockId) {
      this.workspace.nextBlockId = this.id + 1;
    }
    this.instanceId = this.workspace.nextBlockInstanceId;
    this.workspace.nextBlockInstanceId++;
  }

  /// create a block from a JSON definition
  factory Block.fromJSON(CodeWorkspace workspace, Map json) {

    String action = toStr(json["action"]);  // required
    int id = json["id"];
    Block block = new Block(workspace, id, action);
    json["id"] = block.id;

    //----------------------------------------------------------
    // block types
    //----------------------------------------------------------
    if (json["clauses"] is List) {
      for (var clause in json["clauses"]) {
        Chain chain = Chain.fromJSON(workspace, clause);
        block.clauses.add(chain);
      }
    }

    //----------------------------------------------------------
    // block properties
    //----------------------------------------------------------
    block.type = toStr(json["type"]);
    block.format = toStr(json["format"], null);
    block.blockColor = toStr(json["blockColor"], block.blockColor);
    block.textColor = toStr(json["textColor"], block.textColor);
    block.borderColor = toStr(json["borderColor"], block.borderColor);
    block.font = toStr(json["font"], block.font);
    block.required = toBool(json["required"], block.required);

    //----------------------------------------------------------
    // parameters
    //----------------------------------------------------------
    if (json["params"] is List) {
      for (var p in json["params"]) {
        Parameter param = new Parameter.fromJSON(block, p);
        if (param != null) {
          block.params[param.id] = param;
        }
      }
    }

    //----------------------------------------------------------
    // properties
    //----------------------------------------------------------
    if (json["properties"] is List) {
      for (var p in json["properties"]) {
        Parameter prop = new Parameter.fromJSON(block, p);
        if (prop != null) {
          block.properties[prop.id] = prop;
        }
      }
    }

    return block;
  }

  Block clone() {
    Block other = new Block(workspace, id, action);
    _copyTo(other);
    return other;
  }

  void _copyTo(Block other) {
    other.action = action;
    other.type = type;
    other.format = format;
    other.blockColor = blockColor;
    other.textColor = textColor;
    other.borderColor = borderColor;
    other.font = font;
    other.required = required;
    for (Parameter param in params.values) {
      Parameter otherParam = param.clone(other);
      other.params[otherParam.id] = otherParam;
    }
    for (Parameter prop in properties.values) {
      Parameter otherProp = prop.clone(other);
      other.properties[otherProp.id] = otherProp;
    }
  }


//-------------------------------------------------------------------------
/// export block to a JSON object
//-------------------------------------------------------------------------
  Map toJSON() {
    var data = { };
    data["id"] = id;
    data["instanceId"] = instanceId;
    data["action"] = action;
    data["type"] = type;
    data["format"] = format;
    data["required"] = required;
    data["x"] = x;
    data["y"] = y;
    if (children.isNotEmpty) {
      data["children"] = [];
      for (Block child in children) {
        data["children"].add(child.toJSON());
      }
    }
    if (clauses.isNotEmpty) {
      data["clauses"] = [];
      for (Chain clause in clauses) {
        data["clauses"].add(clause.toJSON());
      }
    }
    if (params.isNotEmpty) {
      data["params"] = [];
      for (Parameter param in params.values) {
        data["params"].add(param.toJSON());
      }
    }
    if (properties.isNotEmpty) {
      data["properties"] = [];
      for (Parameter prop in properties.values) {
        data["properties"].add(prop.toJSON());
      }
    }
    return data;
  }

  int getBlockCount(int id) {
    int count = 0;
    if (this.id == id) { count++; }
    if (this.children.isNotEmpty) {
      count = count + this.children.map( (child) => child.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    if (this.clauses.isNotEmpty) {
      count = count + this.clauses.map( (clause) => clause.getBlockCount(id) ).reduce( (a, b) => a + b );
    }
    return count;
  }

  /// move a single block to a location
  void moveBlock(num x, num y) {
    this.x = x;
    this.y = y;
  }

  DivElement draw() {
    DivElement blockNode = new DivElement();
    blockNode.classes.add("nt-block");

    DivElement headerNode = new DivElement();
    headerNode.classes.add("nt-block-header");
    blockNode.append(headerNode);

    DivElement actionNode = new DivElement();
    actionNode.classes.add("nt-block-action");
    actionNode.innerText = action;
    headerNode.append(actionNode);

    for (Parameter attribute in params.values) {
      headerNode.append(attribute.drawParameter());
    }
    for (Parameter attribute in properties.values) {
      blockNode.append(attribute.drawProperty());
    }

    if (children.isNotEmpty) {
      blockNode.append(drawClause(children));
    }

    if (clauses.isNotEmpty) {
      for (Chain clause in clauses) {
        blockNode.append(drawClause(clause.blocks));
      }
    }

    return blockNode;
  }

  static DivElement drawClause(List<Block> blocks) {
    DivElement clauseNode = new DivElement();
    clauseNode.classes.add("nt-clause");
    for (Block block in blocks) {
      final blockDiv = block.draw();
      blockDiv.draggable = true;
      clauseNode.append(blockDiv);
    }
    return clauseNode;
  }

}
