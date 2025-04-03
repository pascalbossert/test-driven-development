// Test-Case: ISBN-13 check for valid numbers
import { isValid } from "./isbn13";

describe("ISBN-13 validation", () => {
  test("valid ISBN-13 numbers", () => {
    expect(isValid("9783866801929")).toBe(true);
    expect(isValid("9780131103627")).toBe(true);
  });
  
  test("invalid ISBN-13 numbers", () => {
    expect(isValid("9783866801920")).toBe(false); // Last digit is wrong
    expect(isValid("9780131103620")).toBe(false); // Last digit is wrong
  });
});

// Test-Case: accepts ISBN-13 with hyphens
test("accepts ISBN-13 with hyphens", () => {
    expect(isValid("978-3-86680-192-9")).toBe(true);
    expect(isValid("978-0-13-110362-7")).toBe(true);
});

// Test-Case: wrong length of input
test("rejects invalid length", () => {
  expect(isValid("97838668019")).toBe(false); // Too short
  expect(isValid("97838668019299")).toBe(false); // Too long
});

// Test-Case: non-numerics is invalid
test("rejects non-numeric inputs", () => {
  expect(isValid("978386680192X")).toBe(false); // Contains letter
});

// Test-Case: check for valid prefix
test("checks prefix validity", () => {
  expect(isValid("9883866801929")).toBe(false); // Doesn't start with 978 or 979
});