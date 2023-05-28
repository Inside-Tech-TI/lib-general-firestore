import type { WhereFilterOp } from '@google-cloud/firestore'

export const conditionalVarsMap = new Map<string, WhereFilterOp>([
  ['$gt', '>'],
  ['$lt', '<'],
  ['$gte', '>='],
  ['$lte', '<='],
  ['$not', '!='],
  ['$elemMatch', 'array-contains'],
  ['$in', 'in'],
  ['$nin', 'not-in'],
  ['$all', 'array-contains-any'],
])
