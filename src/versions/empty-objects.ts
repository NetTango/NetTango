import {
  BlockDefinition
, BlockInstance
, Clause
, ClauseInstance
, CodeWorkspace
, ExpressionAttribute
, Expression
, ExpressionValue
, IntAttribute
, NumberValue
, SelectAttribute
, StringValue
, UnrestrictedTags
, codeWorkspaceSchema
, blockDefinitionSchema
, blockInstanceSchema
, intAttributeSchema
, numValueSchema
, selectAttributeSchema
, stringValueSchema
, expressionAttributeSchema
, expressionSchema
, expressionValueSchema
, clauseSchema
, clauseInstanceSchema
} from "../types/types"

import { BlockStyleUI } from "../blocks/block-style"

const UNRESTRICTED_TAGS: UnrestrictedTags = Object.freeze({ type: "unrestricted" })

const DEFAULT_BLOCK_STYLES = {
  commandBlockStyle: BlockStyleUI.DEFAULT_COMMAND_STYLE
, containerBlockStyle: BlockStyleUI.DEFAULT_CONTAINER_STYLE
, starterBlockStyle: BlockStyleUI.DEFAULT_STARTER_STYLE
}

const EMPTY_WORKSPACE: CodeWorkspace = codeWorkspaceSchema.parse({
  version: 6
})

const EMPTY_BLOCK: BlockDefinition = blockDefinitionSchema.parse({
  id: -1
, action: ""
})

const EMPTY_BLOCK_INSTANCE: BlockInstance = blockInstanceSchema.parse({
  definitionId: -1
, instanceId: -1
})

const INT_ATTRIBUTE: IntAttribute = intAttributeSchema.parse({ type: "int" })

const INT_VALUE: NumberValue = numValueSchema.parse({ type: "int" })

const SELECT_ATTRIBUTE: SelectAttribute = selectAttributeSchema.parse({ type: "select" })

const SELECT_VALUE: StringValue = stringValueSchema.parse({ type: "select" })

const EXPRESSION_ATTRIBUTE: ExpressionAttribute = expressionAttributeSchema.parse({ type: "num" })

const EXPRESSION: Expression = expressionSchema.parse({ name: "0" })

const EXPRESSION_VALUE: ExpressionValue = expressionValueSchema.parse({ type: "num", value: EXPRESSION })

const EMPTY_CLAUSE: Clause = clauseSchema.parse({})

const EMPTY_CLAUSE_INSTANCE: ClauseInstance = clauseInstanceSchema.parse({})

export {
  DEFAULT_BLOCK_STYLES
, EMPTY_BLOCK
, EMPTY_BLOCK_INSTANCE
, EMPTY_CLAUSE
, EMPTY_CLAUSE_INSTANCE
, EMPTY_WORKSPACE
, EXPRESSION
, EXPRESSION_ATTRIBUTE
, EXPRESSION_VALUE
, INT_ATTRIBUTE
, INT_VALUE
, SELECT_ATTRIBUTE
, SELECT_VALUE
, UNRESTRICTED_TAGS
}
