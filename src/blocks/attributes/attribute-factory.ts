// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import {
  Attribute
, AttributeValue
, ExpressionAttribute
, Expression, ExpressionValue
, IntAttribute
, NumberValue
, RangeAttribute
, SelectAttribute
, StringValue
, TextAttribute
} from "../../types/types"

import { BlockInstanceUI } from "../block-instance"
import { AttributeUI } from "./attribute"
import { ExpressionAttributeUI } from "./expression-attribute"
import { IntAttributeUI } from "./int-attribute"
import { RangeAttributeUI } from "./range-attribute"
import { SelectAttributeUI } from "./select-attribute"
import { TextAttributeUI } from "./text-attribute"

function createAttribute(def: Attribute, a: AttributeValue, block: BlockInstanceUI): AttributeUI {
  switch (a.type) {
    case 'text':
      return new TextAttributeUI(def as TextAttribute, a, block)

    case 'int':
      return new IntAttributeUI(def as IntAttribute, a, block)

    case 'range':
      return new RangeAttributeUI(def as RangeAttribute, a, block)

    case 'select':
      return new SelectAttributeUI(def as SelectAttribute, a, block)

    case 'num':
    case 'bool':
      return new ExpressionAttributeUI(def as ExpressionAttribute, a, block)
  }
}

function makeAttributeDefault(attribute: Attribute): AttributeValue {
  switch (attribute.type) {
    case "text":
    case "select":
      return makeStringDefault(attribute)

    case "int":
    case "range":
      return makeNumberDefault(attribute)

    case "num":
    case "bool":
      return makeExpressionDefault(attribute)
  }
}

function makeStringDefault(attribute: TextAttribute | SelectAttribute): StringValue {
  return {
    type: attribute.type
  , value: attribute.default
  }
}

function makeNumberDefault(attribute: IntAttribute | RangeAttribute): NumberValue {
  return {
    type: attribute.type
  , value: attribute.default
  }
}

function makeExpressionDefault(attribute: ExpressionAttribute): ExpressionValue {
  return {
    type: attribute.type
  , value: makeExpressionValue(attribute.type, attribute.default)
  , expressionValue: attribute.default
  }
}

function makeExpressionValue(type: "num" | "bool", name: string): Expression {
  return {
    name: name
  , type: type
  , format: null
  , children: []
  }
}

export {
  createAttribute
, makeAttributeDefault
, makeStringDefault
, makeNumberDefault
, makeExpressionDefault
}
