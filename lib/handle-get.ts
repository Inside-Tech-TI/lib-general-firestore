import type { Firestore } from "@google-cloud/firestore";
import { Document, PaginationRequest } from "./types";
import { filterByProperty } from "./filter";

export const filterById = async (
  firestore: Firestore,
  collection_name: string,
  object_id: string
): Promise<Document> => {
  const document = await firestore.doc(`${collection_name}/${object_id}`).get();
  return {
    id: object_id,
    data: document.data(),
  };
};

export const handleGet = async (
  firestore: Firestore,
  collection_name: string,
  object_id?: string,
  filter?: any,
  offset?: PaginationRequest
): Promise<Document | Array<Partial<Document>>> => {
  return object_id
    ? await filterById(firestore, collection_name, object_id)
    : await filterByProperty(firestore, collection_name, filter, offset);
};
