import { GeneralFirestore } from "..";
require("dotenv").config();

const collection = (col: string) => {
  return GeneralFirestore.getInstance(
    col
    // process.env.FIRESTORE_PRIVATE_KEY,
    // process.env.FIRESTORE_CLIENT_EMAIL
  );
};
const collectionTestName: string = "test_collection";
const firestore = collection(collectionTestName);
const itens = [
  {
    id: "a",
    a: 2,
    b: 1,
    name: "test1",
    hasAccess: true,
    type: "a",
    itens: ["a", "b", "c"],
  },
  {
    id: "b",
    a: 4,
    b: 2,
    name: "test2",
    hasAccess: true,
    type: "a",
    itens: ["a", "b"],
  },
  {
    id: "c",
    a: 6,
    b: 3,
    name: "test3",
    hasAccess: true,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "d",
    a: 8,
    b: 4,
    name: "test4",
    hasAccess: true,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "e",
    a: 10,
    b: 5,
    name: "test5",
    hasAccess: true,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "f",
    a: 11,
    b: 6,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "g",
    a: 10,
    b: 7,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "h",
    a: 10,
    b: 8,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a", "b"],
  },
  {
    id: "i",
    a: 10,
    b: 9,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a"],
  },
  {
    id: "j",
    a: 10,
    b: 10,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a"],
  },
  {
    id: "k",
    a: 10,
    b: 11,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a"],
  },
  {
    id: "l",
    a: 10,
    b: 12,
    name: "test5",
    hasAccess: false,
    type: "b",
    itens: ["a"],
  },
  {
    id: "m",
    a: 10,
    b: 13,
    name: "test5",
    hasAccess: false,
    type: "c",
    itens: ["a"],
  },
];
describe("Upsert and find", () => {
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
      type: string;
    }>({}, undefined, { limit: 2, skip: 0 });
    expect(result.total).toBeGreaterThan(2);
    expect(result.data.length).toBe(2);
  });
  test("Find itens by array", async () => {
    const result = await firestore.find<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
      itens: string[];
    }>({ itens: { $all: ["c"] } }, undefined);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("a");
  });
  test("Find itens by array contains any itens", async () => {
    const result = await firestore.find<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
      itens: string[];
    }>({ itens: { $all: ["b", "c"] }, hasAccess: true }, undefined);
    expect(result.length).toBeGreaterThan(2);
  });

  test("Find itens with filter and total", async () => {
    const result = await firestore.findWithTotal<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
    }>({ type: "b" }, undefined, { limit: 3, skip: 0 });
    expect(result.total).toBe(10);
    expect(result.data.length).toBe(3);
  });

  test("orderBy name asc", async () => {
    const result = await firestore.findWithTotal<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
    }>({}, undefined, { limit: 3, skip: 0 }, "id");
    expect(result.total).toBeGreaterThan(4);
    expect(result.data[1].name).toBe(itens[1].name);
  });
  test("orderBy name desc", async () => {
    const result = await firestore.findWithTotal<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
    }>({}, undefined, { limit: 93, skip: 0 }, "id", "desc");
    expect(result.total).toBeGreaterThan(4);
    expect(result.data[1].name).toBe(itens[itens.length - 2].name);
  });
  test("orderBy name desc without total", async () => {
    const result = await firestore.find<{
      id: string;
      a: number;
      b: number;
      name: string;
      type: string;
    }>({}, undefined, { limit: 93, skip: 0 }, "id", "desc");
    expect(result.length).toBeGreaterThan(1);
    expect(result[1].name).toBe(itens[itens.length - 2].name);
  });
  test("Return null from filterById a non existant id", async () => {
    const result = await firestore.getById<number>("non-existant");
    expect(result).toBe(null);
  });
});