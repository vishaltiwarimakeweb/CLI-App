import { expect, describe, test } from "vitest";
const csvParser = require("../src/csvParser");
describe("CSV parser", () =>
  test("testing-parser", () => {
    const csv = `order_id,product,category,quantity,unit_price
ORD-001,Laptop,Electronics,2,50000`;
    const result = csvParser(csv);
    console.log("Result : ", result);
    expect(result.length).toBe(1);
    expect(result[0].product).toBe("Laptop");
  }));
