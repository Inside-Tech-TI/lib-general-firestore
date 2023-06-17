import { describe, expect, test } from "@jest/globals";
import { GeneralFirestore } from "../lib";
require("dotenv").config();

const collection = GeneralFirestore.getInstance(
  "non-existant",
  process.env.FIRESTORE_PRIVATE_KEY,
  process.env.FIRESTORE_CLIENT_EMAIL
);
describe("sum module", () => {
  test("Return null from filterById a non existant id", async () => {
    const result = await collection.getById("non-existant");
    expect(result).toBe(null);
  });
});
