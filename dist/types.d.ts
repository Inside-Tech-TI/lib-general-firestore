import { WhereFilterOp } from "@google-cloud/firestore";
export type FilterObject = {
    [key: string]: unknown;
};
export type DocumentData = {
    [key: string]: unknown;
    id?: string;
};
export type ResponseGet = {
    document_id?: string;
    data: unknown;
};
export type DocumentWithId = {
    id: string;
};
export type Document = {
    id: string;
    data: unknown;
};
export type Offset = {
    skip: number;
    limit: number;
};
export type ConditionalValue = {
    conditional?: WhereFilterOp;
    value: unknown;
};
export type PaginationRequest = {
    skip: number;
    limit: number;
};
export type GeneralRequest = {
    collection: string;
    id?: string;
    data?: unknown;
    filter?: unknown;
    select?: unknown;
    offset?: PaginationRequest;
};
