import type { Firestore } from "@google-cloud/firestore";
import type { DocumentData, DocumentWithId } from "./types";

export const handleUpdate = async (
  firestore: Firestore,
  collection_name: string,
  data: DocumentData,
  id: string
): Promise<DocumentWithId> => {
  const documentReference = `${collection_name}/${id}`;
  await firestore.doc(documentReference).update(data);
  return { id };
};
