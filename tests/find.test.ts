import { GeneralFirestore } from "../lib";
require("dotenv").config();

const collection = (col: string) => {
  return GeneralFirestore.getInstance(
    col,
    process.env.FIRESTORE_PRIVATE_KEY,
    process.env.FIRESTORE_CLIENT_EMAIL
  );
};
describe("sum module", () => {
  test("Return null from filterById a non existant id", async () => {
    const result = await collection("opa").getById<number>("non-existant");
    expect(result).toBe(null);
  });
});
