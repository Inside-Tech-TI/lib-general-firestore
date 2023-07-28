import type { Firestore } from "@google-cloud/firestore";
import { filterByProperty, filterByPropertyWithTotal } from "./filter";
import { PaginationRequest } from "./types";

export const handleFind = async <T>(
  firestore: Firestore,
  collection_name: string,
  filter: Record<string, unknown> = {},
  select?: unknown,
  offset?: PaginationRequest,
  orderBy?: string,
  orderDirection?: string
): Promise<T[]> => {
  return filterByProperty<T>(
    firestore,
    collection_name,
    filter,
    select,
    offset,
    orderBy,
    orderDirection
  );
};

export const handleFindWithTotal = async <T>(
  firestore: Firestore,
  collection_name: string,
  filter: Record<string, unknown> = {},
  select?: unknown,
  offset?: PaginationRequest,
  orderBy?: string,
  orderDirection?: string
): Promise<{ total: number; data: T[] }> => {
  return filterByPropertyWithTotal<T>(
    firestore,
    collection_name,
    filter,
    select,
    offset,
    orderBy,
    orderDirection
  );
};
export const filterById = async <T>(
  firestore: Firestore,
  collection_name: string,
  object_id: string
): Promise<T | null> => {
  const ref_doc = `${collection_name}/${object_id}`;
  const document = await firestore.doc(ref_doc).get();
  console.log({ documentData: document.data() });
  if (!document.data()) {
    return null;
  }
  return Object.assign({}, { id: object_id }, document.data() as T);
};
