// NetTango Copyright (C) Michael S. Horn, Uri Wilensky, and Corey Brady. https://github.com/NetTango/NetTango

import { z } from "zod"

export type BlockStyleInput  = z.infer<typeof blockStyleInputSchema>
export type InheritTags = z.infer<typeof inheritTagsInputSchema>
export type UnrestrictedTags = z.infer<typeof unrestrictedTagsInputSchema>
export type AnyOfTags = z.infer<typeof anyOfTagsInputSchema>
export type ConcreteTags = z.infer<typeof concreteTagsInputSchema>
export type AllowedTags = z.infer<typeof allowedTagsInputSchema>
export type SelectOptionInput = z.infer<typeof selectOptionInputSchema>
export type TextAttributeInput = z.infer<typeof textAttributeInputSchema>
export type SelectAttributeInput = z.infer<typeof selectAttributeInputSchema>
export type NumAttributeInput = z.infer<typeof numAttributeInputSchema>
export type IntAttributeInput = z.infer<typeof intAttributeInputSchema>
export type RangeAttributeInput = z.infer<typeof rangeAttributeInputSchema>
export type ExpressionAttributeInput = z.infer<typeof expressionAttributeInputSchema>
export type AttributeInput = z.infer<typeof attributeInputSchema>
export type NewAttributeInput = z.infer<typeof newAttributeInputSchema>
export type BlockInput = z.infer<typeof blockInputSchema>
export type ChainInput = z.infer<typeof chainInputSchema>
export type ExpressionDefinition = z.infer<typeof expressionDefinitionInputSchema>
export type CodeWorkspaceInput = z.infer<typeof codeWorkspaceInputSchema>

export type ExpressionInput = {
  name: string
  type: "num" | "bool"
  format: string | null
  children: Array<ExpressionInput>
}

export type ClauseInput = {
  children: Array<BlockInput>
  action: string | null
  open: string | null
  close: string | null
  allowedTags: AllowedTags
}

const blockStyleInputSchema = z.object({
  blockColor: z.string()
, textColor: z.string()
, borderColor: z.string()
, fontWeight: z.string()
, fontSize: z.string()
, fontFace: z.string()
}).passthrough()

const inheritTagsInputSchema = z.object({
  type: z.literal("inherit")
}).passthrough()

const unrestrictedTagsInputSchema = z.object({
  type: z.literal("unrestricted")
}).passthrough()

const anyOfTagsInputSchema = z.object({
  type: z.literal("any-of")
, tags: z.array(z.string())
}).passthrough()

const concreteTagsInputSchema = z.union([
    unrestrictedTagsInputSchema
  , anyOfTagsInputSchema
])

const allowedTagsInputSchema = z.union([
  inheritTagsInputSchema
, concreteTagsInputSchema
])

const clauseInputSchema: z.ZodSchema<ClauseInput> = z.lazy(() =>
  z.object({
    children: z.array(blockInputSchema)
  , action: z.string().nullable()
  , open: z.string().nullable()
  , close: z.string().nullable()
  , allowedTags: allowedTagsInputSchema
  }).passthrough()
)

const attributeBaseSchema = z.object({
  id: z.number()
, name: z.string().nullable()
, unit: z.string().nullable()
})

const textAttributeInputSchema = attributeBaseSchema.extend({
  type: z.literal("text")
, value: z.string()
, default: z.string()
}).passthrough()

const selectOptionInputSchema = z.object({
  actual: z.string()
, display: z.string().nullable()
}).passthrough()

const selectAttributeInputSchema = attributeBaseSchema.extend({
  type: z.literal("select")
, value: z.string()
, default: z.string()
, quoteValues: z.union([
    z.literal("smart-quote")
  , z.literal("always-quote")
  , z.literal("never-quote")
  ])
, values: z.array(selectOptionInputSchema)
}).passthrough()

const numAttributeInputSchema = attributeBaseSchema.extend({
  step: z.number()
, random: z.boolean()
, value: z.number()
, default: z.number()
}).passthrough()

const intAttributeInputSchema = numAttributeInputSchema.extend({
  type: z.literal("int")
}).passthrough()

const rangeAttributeInputSchema = numAttributeInputSchema.extend({
  type: z.literal("range")
, min: z.number()
, max: z.number()
}).passthrough()

const expressionTypes = z.union([z.literal("num"), z.literal("bool")])

const expressionInputSchema: z.ZodSchema<ExpressionInput> = z.lazy(() =>
  z.object({
    name: z.string()
  , type: expressionTypes
  , format: z.string().nullable()
  , children: z.array(expressionInputSchema)
  }).passthrough()
)

const expressionAttributeInputSchema = attributeBaseSchema.extend({
  id: z.number()
, type: expressionTypes
, default: z.string()
, value: z.union([z.string(), expressionInputSchema])
, expressionValue: z.string().nullable()
}).passthrough()

const attributeInputSchema = z.union([
  textAttributeInputSchema
, selectAttributeInputSchema
, intAttributeInputSchema
, rangeAttributeInputSchema
, expressionAttributeInputSchema
])

const nullableId = z.object({ id: z.number().nullable() })
const newAttributeInputSchema = z.union([
  textAttributeInputSchema.merge(nullableId)
, selectAttributeInputSchema.merge(nullableId)
, intAttributeInputSchema.merge(nullableId)
, rangeAttributeInputSchema.merge(nullableId)
, expressionAttributeInputSchema.merge(nullableId)
])

const blockInputSchema = z.object({
  id: z.number()
, action: z.string()
, isRequired: z.boolean()
, placement: z.union([
    z.literal("starter")
  , z.literal("child")
  , z.literal("anywhere")
  ])
, instanceId: z.number().nullable()
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
, allowedTags: concreteTagsInputSchema
, tags: z.array(z.string())
, clauses: z.array(clauseInputSchema)
, params: z.array(attributeInputSchema)
, properties: z.array(attributeInputSchema)
, propertiesDisplay: z.union([z.literal("shown"), z.literal("hidden")])
}).passthrough()

const chainInputSchema = z.object({
  x: z.number()
, y: z.number()
, blocks: z.array(blockInputSchema)
}).passthrough()

const expressionTypeSchema = z.union([z.literal("num"), z.literal("bool")])

const expressionDefinitionInputSchema = z.object({
  name: z.string()
, type: expressionTypeSchema
, arguments: z.array(expressionTypeSchema)
, format: z.string().nullable()
}).passthrough()

export const codeWorkspaceInputSchema = z.object({
  version: z.number()
, height: z.number()
, width: z.number()
, blocks: z.array(blockInputSchema)
, program: z.object({ chains: z.array(chainInputSchema) })
, chainOpen: z.string().nullable()
, chainClose: z.string().nullable()
, blockStyles: z.object({
    starterBlockStyle: blockStyleInputSchema
  , containerBlockStyle: blockStyleInputSchema
  , commandBlockStyle: blockStyleInputSchema
  }).nullable()
, variables: z.array(z.string())
, expressions: z.array(expressionDefinitionInputSchema)
}).passthrough()
