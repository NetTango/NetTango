// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { z } from "zod"

export type BlockStyle  = z.infer<typeof blockStyleSchema>

export type InheritTags = z.infer<typeof inheritTagsSchema>
export type UnrestrictedTags = z.infer<typeof unrestrictedTagsSchema>
export type AnyOfTags = z.infer<typeof anyOfTagsSchema>
export type ConcreteTags = z.infer<typeof concreteTagsSchema>
export type AllowedTags = z.infer<typeof allowedTagsSchema>

export type SelectOption = z.infer<typeof selectOptionSchema>

export type TextAttribute = z.infer<typeof textAttributeSchema>
export type SelectAttribute = z.infer<typeof selectAttributeSchema>
export type NumAttribute = z.infer<typeof numAttributeSchema>
export type IntAttribute = z.infer<typeof intAttributeSchema>
export type RangeAttribute = z.infer<typeof rangeAttributeSchema>
export type ExpressionAttribute = z.infer<typeof expressionAttributeSchema>
export type Attribute = z.infer<typeof attributeSchema>

export type BlockDefinition = z.infer<typeof blockDefinitionSchema>
export type Clause = z.infer<typeof clauseSchema>

export type Chain = z.infer<typeof chainSchema>
export type BlockInstance = z.infer<typeof blockInstanceSchema>
export type StringValue = z.infer<typeof stringValueSchema>
export type NumberValue = z.infer<typeof numValueSchema>
export type ExpressionValue = z.infer<typeof expressionValueSchema>
export type AttributeValue = z.infer<typeof attributeValueSchema>
export type ExpressionDefinition = z.infer<typeof expressionDefinitionSchema>
export type CodeWorkspace = z.infer<typeof codeWorkspaceSchema>

export type Expression = {
  name: string
  type: "num" | "bool"
  format: string | null
  children: Array<Expression>
}

export type ClauseInstance = {
  blocks: Array<BlockInstance>
}

const blockStyleSchema = z.object({
  blockColor: z.string()
, textColor: z.string()
, borderColor: z.string()
, fontWeight: z.string()
, fontSize: z.string()
, fontFace: z.string()
}).passthrough()

const inheritTagsSchema = z.object({
  type: z.literal("inherit")
}).passthrough()

const unrestrictedTagsSchema = z.object({
  type: z.literal("unrestricted")
}).passthrough()

const anyOfTagsSchema = z.object({
  type: z.literal("any-of")
, tags: z.array(z.string())
}).passthrough()

const concreteTagsSchema = z.union([
    unrestrictedTagsSchema
  , anyOfTagsSchema
])

const allowedTagsSchema = z.union([
  inheritTagsSchema
, concreteTagsSchema
])

const clauseSchema = z.object({
    action: z.string().nullable()
  , open: z.string().nullable()
  , close: z.string().nullable()
  , allowedTags: allowedTagsSchema
}).passthrough()

const clauseInstanceSchema: z.ZodSchema<ClauseInstance> = z.lazy(() =>
  z.object({
    blocks: z.array(blockInstanceSchema)
  }).passthrough()
)

const attributeBaseSchema = z.object({
  id: z.number()
, name: z.string().nullable()
, unit: z.string().nullable()
})

const textAttributeSchema = attributeBaseSchema.extend({
  type: z.literal("text")
, default: z.string()
}).passthrough()

const selectOptionSchema = z.object({
  actual: z.string()
, display: z.string().nullable()
}).passthrough()

const selectAttributeSchema = attributeBaseSchema.extend({
  type: z.literal("select")
, default: z.string()
, quoteValues: z.union([
    z.literal("smart-quote")
  , z.literal("always-quote")
  , z.literal("never-quote")
  ])
, values: z.array(selectOptionSchema)
}).passthrough()

const numAttributeSchema = attributeBaseSchema.extend({
  step: z.number()
, random: z.boolean()
, default: z.number()
}).passthrough()

const intAttributeSchema = numAttributeSchema.extend({
  type: z.literal("int")
}).passthrough()

const rangeAttributeSchema = numAttributeSchema.extend({
  type: z.literal("range")
, min: z.number()
, max: z.number()
}).passthrough()

const expressionTypes = z.union([z.literal("num"), z.literal("bool")])

const expressionSchema: z.ZodSchema<Expression> = z.lazy(() =>
  z.object({
    name: z.string()
  , type: expressionTypes
  , format: z.string().nullable()
  , children: z.array(expressionSchema)
  }).passthrough()
)

const expressionAttributeSchema = attributeBaseSchema.extend({
  type: expressionTypes
, default: z.string()
}).passthrough()

const attributeSchema = z.union([
  textAttributeSchema
, selectAttributeSchema
, intAttributeSchema
, rangeAttributeSchema
, expressionAttributeSchema
])

const stringValueSchema = z.object({
  type: z.union([z.literal("text"), z.literal("select")])
, value: z.string()
}).passthrough()

const numValueSchema = z.object({
  type: z.union([z.literal("int"), z.literal("range")])
, value: z.number()
}).passthrough()

const expressionValueSchema = z.object({
  type: z.union([z.literal("num"), z.literal("bool")])
, value: expressionSchema
, expressionValue: z.string().nullable()
}).passthrough()

const attributeValueSchema = z.union([
  stringValueSchema
, numValueSchema
, expressionValueSchema
])

const blockDefinitionSchema = z.object({
  id: z.number()
, action: z.string()
, isRequired: z.boolean()
, placement: z.union([
    z.literal("starter")
  , z.literal("child")
  , z.literal("anywhere")
  ])
, type: z.string().nullable()
, format: z.string().nullable()
, isTerminal: z.boolean()
, closeClauses: z.string().nullable()
, closeStarter: z.string().nullable()
, limit: z.number()
, note: z.string().nullable()
, blockColor: z.string().nullable()
, textColor: z.string().nullable()
, borderColor: z.string().nullable()
, font: z.string().nullable()
, allowedTags: concreteTagsSchema
, tags: z.array(z.string())
, clauses: z.array(clauseSchema)
, params: z.array(attributeSchema)
, properties: z.array(attributeSchema)
}).passthrough()

const blockInstanceSchema = z.object({
  definitionId: z.number()
, instanceId: z.number()
, clauses: z.array(clauseInstanceSchema)
, params: z.array(attributeValueSchema)
, properties: z.array(attributeValueSchema)
, propertiesDisplay: z.union([z.literal("shown"), z.literal("hidden")])
}).passthrough()

const chainSchema = z.object({
  x: z.number()
, y: z.number()
, blocks: z.array(blockInstanceSchema)
}).passthrough()

const expressionTypeSchema = z.union([z.literal("num"), z.literal("bool")])

const expressionDefinitionSchema = z.object({
  name: z.string()
, type: expressionTypeSchema
, arguments: z.array(expressionTypeSchema)
, format: z.string().nullable()
}).passthrough()

export const codeWorkspaceSchema = z.object({
  version: z.literal(7)
, height: z.number()
, width: z.number()
, blocks: z.array(blockDefinitionSchema)
, program: z.object({ chains: z.array(chainSchema) })
, chainOpen: z.string().nullable()
, chainClose: z.string().nullable()
, blockStyles: z.object({
    starterBlockStyle: blockStyleSchema
  , containerBlockStyle: blockStyleSchema
  , commandBlockStyle: blockStyleSchema
  }).nullable()
, variables: z.array(z.string())
, expressions: z.array(expressionDefinitionSchema)
}).passthrough()
