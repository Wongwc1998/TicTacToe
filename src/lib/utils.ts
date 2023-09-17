import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str: string) {
  return Array.from(str).reverse().join("");
}

export function caesarCipher(str: string, shift: number) {
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}

export function calculator(
  operator: "add" | "subtract" | "multiply" | "divide",
  operand1: number,
  operand2: number,
) {
  switch (operator) {
    case "add":
      return operand1 + operand2;
    case "subtract":
      return operand1 - operand2;
    case "multiply":
      return operand1 * operand2;
    case "divide":
      return operand1 / operand2;
  }
}

export function analyzeArray(input: number[]) {
  //return average, min value of array, max value of array, and length of array
  return {
    average: input.reduce((a, b) => a + b) / input.length,
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length,
  };
}
