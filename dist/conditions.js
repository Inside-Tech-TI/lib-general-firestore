"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditionalVarsMap = void 0;
exports.conditionalVarsMap = new Map([
    ['$gt', '>'],
    ['$lt', '<'],
    ['$gte', '>='],
    ['$lte', '<='],
    ['$not', '!='],
    ['$elemMatch', 'array-contains'],
    ['$in', 'in'],
    ['$nin', 'not-in'],
    ['$all', 'array-contains-any'],
]);
