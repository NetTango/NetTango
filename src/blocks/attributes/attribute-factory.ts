// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import {
  AttributeInput
, AttributeValueInput
, ExpressionAttributeInput
, ExpressionInput, ExpressionValueInput
, IntAttributeInput
, NumberValueInput
, RangeAttributeInput
, SelectAttributeInput
, StringValueInput
, TextAttributeInput
} from "../../types/types"

import { Block } from "../block-instance"
import { Attribute } from "./attribute"
import { ExpressionAttribute } from "./expression-attribute"
import { IntAttribute } from "./int-attribute"
import { RangeAttribute } from "./range-attribute"
import { SelectAttribute } from "./select-attribute"
import { TextAttribute } from "./text-attribute"

function createAttribute(def: AttributeInput, a: AttributeValueInput, block: Block): Attribute {
  switch (a.type) {
    case 'text':
      return new TextAttribute(def as TextAttributeInput, a, block)

    case 'int':
      return new IntAttribute(def as IntAttributeInput, a, block)

    case 'range':
      return new RangeAttribute(def as RangeAttributeInput, a, block)

    case 'select':
      return new SelectAttribute(def as SelectAttributeInput, a, block)

    case 'num':
    case 'bool':
      return new ExpressionAttribute(def as ExpressionAttributeInput, a, block)
  }
}

function makeAttributeDefault(attribute: AttributeInput): AttributeValueInput {
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

function makeStringDefault(attribute: TextAttributeInput | SelectAttributeInput): StringValueInput {
  return {
    type: attribute.type
  , value: attribute.default
  }
}

function makeNumberDefault(attribute: IntAttributeInput | RangeAttributeInput): NumberValueInput {
  return {
    type: attribute.type
  , value: attribute.default
  }
}

function makeExpressionDefault(attribute: ExpressionAttributeInput): ExpressionValueInput {
  return {
    type: attribute.type
  , value: makeExpressionValue(attribute.type, attribute.default)
  , expressionValue: attribute.default
  }
}

function makeExpressionValue(type: "num" | "bool", name: string): ExpressionInput {
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
