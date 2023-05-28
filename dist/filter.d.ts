import { Firestore, WhereFilterOp } from "@google-cloud/firestore";
import type { ConditionalValue, Offset } from "./types";
export declare const getCondition: (alias: string) => WhereFilterOp | undefined;
export declare const getConditionalValue: (arg: unknown) => ConditionalValue;
export declare const filterByProperty: <T = unknown>(firestore: Firestore, collection: string, filter: Record<string, unknown>, select?: unknown, offset?: Offset) => Promise<T[]>;
