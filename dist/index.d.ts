import { WriteResult } from "@google-cloud/firestore";
import type { DocumentWithId, FilterObject, Offset } from "./types";
export declare const getGeneralFirestoreInstance: (collection: string, privateKey?: string, clientEmail?: string) => GeneralFirestore;
export declare class GeneralFirestore {
    private readonly fireStoreInstance;
    private readonly collection;
    constructor(collection: string, privateKey?: string, clientEmail?: string);
    static getInstance(collection: string, privateKey?: string, clientEmail?: string): GeneralFirestore;
    getById<T>(id: string): Promise<T | null>;
    find<T>(filter?: FilterObject, select?: FilterObject, offset?: Offset, orderBy?: string): Promise<T[]>;
    findWithTotal<T>(filter?: FilterObject, select?: FilterObject, offset?: Offset, orderBy?: string): Promise<{
        total: number;
        data: T[];
    }>;
    insert(data: {
        [key: string]: any;
        id?: string;
    }): Promise<DocumentWithId>;
    update(data: {
        [key: string]: any;
        id: string;
    }): Promise<DocumentWithId>;
    delete(id: string): Promise<WriteResult>;
    healthCheck(): boolean;
    private getFirestoreInstance;
}
