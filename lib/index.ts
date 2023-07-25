import { Firestore, WriteResult } from "@google-cloud/firestore";
import { handleUpdate } from "./handle-update";
import { filterById, handleFind, handleFindWithTotal } from "./handle-find";
import type { DocumentWithId, FilterObject, Offset } from "./types";
import { handleInsert } from "./handle-insert";
import { Singleton } from "./singleton";
import { handleDelete } from "./handle-delete";

export const getGeneralFirestoreInstance = (
  collection: string,
  privateKey?: string,
  clientEmail?: string
): GeneralFirestore => {
  return Singleton.getInstance<GeneralFirestore>(
    `firestore-wrapper-${collection}${privateKey ? `-${privateKey}` : ""}${
      clientEmail ? `-${clientEmail}` : ""
    }`,
    GeneralFirestore,
    collection,
    privateKey,
    clientEmail
  );
};

export class GeneralFirestore {
  private readonly fireStoreInstance: Firestore;
  private readonly collection: string;

  constructor(collection: string, privateKey?: string, clientEmail?: string) {
    this.collection = collection;
    this.fireStoreInstance = this.getFirestoreInstance(privateKey, clientEmail);
  }

  public static getInstance(
    collection: string,
    privateKey?: string,
    clientEmail?: string
  ): GeneralFirestore {
    return getGeneralFirestoreInstance(collection, privateKey, clientEmail);
  }

  public async getById<T>(id: string): Promise<T | null> {
    return await filterById<T>(this.fireStoreInstance, this.collection, id);
  }

  public async find<T>(
    filter?: FilterObject,
    select?: FilterObject,
    offset?: Offset,
    orderBy?: string
  ): Promise<T[]> {
    return await handleFind<T>(
      this.fireStoreInstance,
      this.collection,
      filter,
      select,
      offset,
      orderBy
    );
  }

  public async findWithTotal<T>(
    filter?: FilterObject,
    select?: FilterObject,
    offset?: Offset,
    orderBy?: string
  ): Promise<{ total: number; data: T[] }> {
    return await handleFindWithTotal<T>(
      this.fireStoreInstance,
      this.collection,
      filter,
      select,
      offset,
      orderBy
    );
  }

  public async insert(data: {
    [key: string]: any;
    id?: string;
  }): Promise<DocumentWithId> {
    const result = await handleInsert(
      this.fireStoreInstance,
      this.collection,
      data
    );
    return { id: result.id };
  }

  public async update(data: {
    [key: string]: any;
    id: string;
  }): Promise<DocumentWithId> {
    return await handleUpdate(
      this.fireStoreInstance,
      this.collection,
      data,
      data.id
    );
  }

  public async delete(id: string): Promise<WriteResult> {
    return await handleDelete(this.fireStoreInstance, this.collection, id);
  }

  public healthCheck(): boolean {
    return !!this.fireStoreInstance;
  }

  private getFirestoreInstance = (
    privateKey?: string,
    clientEmail?: string
  ): Firestore => {
    const key =
      privateKey && clientEmail
        ? `${privateKey}${clientEmail}`
        : `${process.env.FIRESTORE_PRIVATE_KEY}${process.env.FIRESTORE_CLIENT_EMAIL}`;

    return Singleton.getInstance<Firestore>(key, Firestore, {
      credentials: {
        private_key: privateKey || process.env.FIRESTORE_PRIVATE_KEY,
        client_email: clientEmail || process.env.FIRESTORE_CLIENT_EMAIL,
      },
    });
  };
}
