import type { DocumentWithId, FilterObject, Offset } from "./types";
export declare const getGeneralFirestoreInstance: (collection: string, privateKey?: string, clientEmail?: string) => GeneralFirestore;
export declare class GeneralFirestore {
    private readonly fireStoreInstance;
    private readonly collection;
    constructor(collection: string, privateKey?: string, clientEmail?: string);
    static getInstance(collection: string, privateKey?: string, clientEmail?: string): GeneralFirestore;
    getById<T>(id: string): Promise<T | null>;
    find<T>(filter?: FilterObject, select?: FilterObject, offset?: Offset): Promise<T[]>;
    insert(data: {
        [key: string]: any;
        id?: string;
    }): Promise<DocumentWithId>;
    update(data: {
        [key: string]: any;
        id: string;
    }): Promise<DocumentWithId>;
    healthCheck(): boolean;
    private getFirestoreInstance;
}
