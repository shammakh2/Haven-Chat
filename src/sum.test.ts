import { expect, test } from "vitest";
import { sum } from "./sum";

test("sum adds two numbers", () => {
  expect(sum(2, 2)).toBe(5);
});
