import { GeneralFirestore } from "../lib";
require("dotenv").config();

const collection = (col: string) => {
  return GeneralFirestore.getInstance(
    col,
    process.env.FIRESTORE_PRIVATE_KEY,
    process.env.FIRESTORE_CLIENT_EMAIL
  );
};
const collectionTestName: string = "test_collection";
const firestore = collection(collectionTestName);
const itens = [
  { id: "a", a: 2, b: 1, name: "test1" },
  { id: "b", a: 4, b: 2, name: "test2" },
  { id: "c", a: 6, b: 3, name: "test3" },
  { id: "d", a: 8, b: 4, name: "test4" },
  { id: "e", a: 10, b: 5, name: "test5" },
];
describe("sum module", () => {
  test("Upsert itens", async () => {
    for await (let item of itens) {
      const result = await firestore.insert(item);
      expect(result).not.toBe(null);
      expect(result.id).toBe(item.id);
    }
  });

  test("Find itens", async () => {
    const result = await firestore.findWithTotal<{
      id: string;
      a: number;
      b: number;
      name: string;
    }>({}, undefined, { limit: 2, skip: 0 });
    expect(result.total).toBeGreaterThan(2);
    expect(result.data.length).toBe(2);
  });
  test("Return null from filterById a non existant id", async () => {
    const result = await firestore.getById<number>("non-existant");
    expect(result).toBe(null);
  });
});
