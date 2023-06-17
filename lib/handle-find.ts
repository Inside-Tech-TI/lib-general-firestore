import type { Firestore } from "@google-cloud/firestore";
import { filterByProperty } from "./filter";
import { PaginationRequest } from "./types";

export const handleFind = async <T>(
  firestore: Firestore,
  collection_name: string,
  filter: Record<string, unknown> = {},
  select?: unknown,
  offset?: PaginationRequest
): Promise<T[]> => {
  return filterByProperty<T>(
    firestore,
    collection_name,
    filter,
    select,
    offset
  );
};

export const filterById = async <T>(
  firestore: Firestore,
  collection_name: string,
  object_id: string
): Promise<T | null> => {
  const ref_doc = `${collection_name}/${object_id}`;
  const document = await firestore.doc(ref_doc).get();
  if (document.data()) {
    return Object.assign({}, { id: object_id }, document.data() as T);
  }
  return null;
};
