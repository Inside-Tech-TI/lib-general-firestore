import {
  CollectionReference,
  Firestore,
  Query,
  WhereFilterOp,
} from "@google-cloud/firestore";
import { conditionalVarsMap } from "./conditions";
import type { ConditionalValue, Offset } from "./types";

export const sum = (a: number, b: number) => a + b;

export const getCondition = (alias: string): WhereFilterOp | undefined => {
  return conditionalVarsMap.get(alias);
};

export const getConditionalValue = (arg: unknown): ConditionalValue => {
  const conditionalValue: ConditionalValue = {
    conditional: "==",
    value: arg,
  };

  if (Array.isArray(arg)) {
    return {
      conditional: "in",
      value: arg,
    };
  }

  if (arg == null) {
    return {
      conditional: "==",
      value: arg,
    };
  }

  for (const key in arg as Record<string, unknown>) {
    const conditional = getCondition(key);
    if (conditional) {
      return {
        conditional,
        value: (arg as Record<string, unknown>)[key],
      };
    }
  }

  return conditionalValue;
};

export const filterByProperty = async <T = unknown>(
  firestore: Firestore,
  collection: string,
  filter: Record<string, unknown>,
  select?: unknown,
  offset?: Offset
): Promise<T[]> => {
  const collectionReference: CollectionReference =
    firestore.collection(collection);
  let query: Query = collectionReference
    .limit(offset?.limit ?? 30)
    .offset(offset?.skip ?? 0);

  for (const key in filter) {
    const conditionalValue = getConditionalValue(filter[key]);
    query = query.where(
      key,
      (conditionalValue.conditional as WhereFilterOp | undefined) ?? "==",
      conditionalValue.value
    );
  }

  if (select) {
    const selectFilter: string[] = Object.keys(
      select as Record<string, unknown>
    );
    query = query.select(...selectFilter);
  }

  if (!offset) {
    offset = {
      skip: 0,
      limit: 30,
    };
  }

  const response = await query.get();
  const items = response.docs.map((doc) => {
    const data = doc.data() as T;
    return { id: doc.id, ...data };
  });

  return items;
};
