import type { Firestore } from "@google-cloud/firestore";
import { Document, PaginationRequest } from "./types";
export declare const filterById: (firestore: Firestore, collection_name: string, object_id: string) => Promise<Document>;
export declare const handleGet: (firestore: Firestore, collection_name: string, object_id?: string, filter?: any, offset?: PaginationRequest) => Promise<Document | Array<Partial<Document>>>;
