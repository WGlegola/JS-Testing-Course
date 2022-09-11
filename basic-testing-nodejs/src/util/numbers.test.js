import { assert, expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should yield number when given string", () => {
  const value = "1";
  const result = transformToNumber(value);
  expect(result).toBeTypeOf("number");
});
it("should yield number when given string", () => {
  const value = "1";
  const result = transformToNumber(value);
  expect(result).toBe(1);
});

it("should yield NaN for non-transformable values", () => {
  const input1 = "invalid";
  const input2 = {};
  const result1 = transformToNumber(input1);
  const result2 = transformToNumber(input2);
  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});
