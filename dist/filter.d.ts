import { Firestore, WhereFilterOp } from "@google-cloud/firestore";
import type { ConditionalValue, Offset } from "./types";
export declare const sum: (a: number, b: number) => number;
export declare const getCondition: (alias: string) => WhereFilterOp | undefined;
export declare const getConditionalValue: (arg: unknown) => ConditionalValue;
export declare const filterByProperty: <T = unknown>(firestore: Firestore, collection: string, filter: Record<string, unknown>, select?: unknown, offset?: Offset, orderBy?: string) => Promise<T[]>;
export declare const filterByPropertyWithTotal: <T = unknown>(firestore: Firestore, collection: string, filter: Record<string, unknown>, select?: unknown, offset?: Offset, orderBy?: string) => Promise<{
    total: number;
    data: T[];
}>;
