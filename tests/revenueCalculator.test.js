import { describe, expect, test } from "vitest";
const revenueCalculator = require("../src/revenueCalculator");
describe("Revenue Calculator test", () =>
  test("test-calculator", () => {
    const orderArray = [
      {
        order_id: "ORD-001",
        product: "Laptop",
        category: "Electronics",
        quantity: "2",
        unit_price: "50000",
      },
    ];
    const result = revenueCalculator(orderArray);
    expect(result.electronicsRevenue).toBe(100000);
    expect(result.totalRevenue).toBe(100000);
  }));
