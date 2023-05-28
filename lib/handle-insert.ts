import { randomUUID } from "node:crypto";
import type { Firestore } from "@google-cloud/firestore";
import { DocumentData, DocumentWithId } from "./types";

export const handleInsert = async (
  firestore: Firestore,
  collection_name: string,
  data: DocumentData
): Promise<DocumentWithId> => {
  const id = data?.id ? (data?.id as string) : randomUUID();
  await firestore.doc(`${collection_name}/${id}`).set({ ...data, id });
  return { id };
};
