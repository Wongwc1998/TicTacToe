import { describe, expect, it } from "vitest";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./utils";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

describe("reverseString", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("calculator", () => {
  it("should add two numbers", () => {
    expect(calculator("add", 1, 2)).toBe(3);
  });
  it("should subtract two numbers", () => {
    expect(calculator("subtract", 1, 2)).toBe(-1);
  });
  it("should multiply two numbers", () => {
    expect(calculator("multiply", 1, 2)).toBe(2);
  });
  it("should divide two numbers", () => {
    expect(calculator("divide", 1, 2)).toBe(0.5);
  });
});

describe("caesarCipher", () => {
  it("should shift letters by a given number", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
  });
  it("should wrap around the alphabet", () => {
    expect(caesarCipher("zoo", 1)).toBe("app");
    expect(caesarCipher("Zoo", 1)).toBe("App");
  });
});

describe("analyzeArray", () => {
  it("should return an object with the average, min, max, and length of an array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
