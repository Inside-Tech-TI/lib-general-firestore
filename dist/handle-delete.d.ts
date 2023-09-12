import type { Firestore, WriteResult } from '@google-cloud/firestore';
export declare const handleDelete: (firestore: Firestore, collection: string, id: string) => Promise<WriteResult>;
