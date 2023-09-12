import type { Firestore } from "@google-cloud/firestore";
import { DocumentData, DocumentWithId } from "./types";
export declare const handleInsert: (firestore: Firestore, collection_name: string, data: DocumentData) => Promise<DocumentWithId>;
