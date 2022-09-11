import { expect, it } from "vitest";
import { add } from "./math";

it("should sumarizze all number values in an array", () => {
  //Arange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);
  //Act
  const result = add(numbers);
  //Assert
  expect(result).toBe(expectedResult);
});

it("should yeald Nan if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("should yeald a correct sum of an array of numveric string values is provided", () => {
  const inputs = ["1", "2"];
  const result = add(inputs);
  const expectedResult = inputs.reduce((prev, cur) => +prev + +cur, 0);
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultfn = () => {
    add();
  };
  expect(resultfn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const resultfn = () => {
    add(1, 2, 3);
  };
  expect(resultfn).toThrow(/is not iterable/);
});
