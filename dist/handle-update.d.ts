import type { Firestore } from "@google-cloud/firestore";
import type { DocumentData, DocumentWithId } from "./types";
export declare const handleUpdate: (firestore: Firestore, collection_name: string, data: DocumentData, id: string) => Promise<DocumentWithId>;
