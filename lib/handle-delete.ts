import type { Firestore, WriteResult } from '@google-cloud/firestore'

export const handleDelete = async (
  firestore: Firestore,
  collection: string,
  id: string,
): Promise<WriteResult> => {
  return await firestore.collection(collection).doc(id).delete()
}
