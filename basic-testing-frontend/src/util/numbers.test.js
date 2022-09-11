import { assert, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";
describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];
    const cleanNumbers = cleanNumbers(numberValues);
    expect(cleanNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
