import type { Firestore } from "@google-cloud/firestore";
import { PaginationRequest } from "./types";
export declare const handleFind: <T>(firestore: Firestore, collection_name: string, filter?: Record<string, unknown>, select?: unknown, offset?: PaginationRequest, orderBy?: string, direction?: string) => Promise<T[]>;
export declare const handleFindWithTotal: <T>(firestore: Firestore, collection_name: string, filter?: Record<string, unknown>, select?: unknown, offset?: PaginationRequest, orderBy?: string, orderDirection?: string) => Promise<{
    total: number;
    data: T[];
}>;
export declare const filterById: <T>(firestore: Firestore, collection_name: string, object_id: string) => Promise<T | null>;
