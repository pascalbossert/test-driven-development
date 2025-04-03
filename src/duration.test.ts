import { formatDuration } from "./duration";

// Test-Case: add the seconds marker
describe("formatDuration", () => {
  test("formats 33 seconds as 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });
});

// Test-Case: add the minutes and seconds marker
test("formats 123 seconds as 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
});

// Test-Case: add the minutes but not the second marker
test("formats 180 seconds as 3m", () => {
    expect(formatDuration(180)).toBe("3m");
});

// Test-Case: add the hour but not the minutes marker
test("formats 3600 seconds as 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
});

// Test-Case: add the hour, minutes and seconds marker
test("formats 3999 seconds as 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
});

// Test-Case: add second market even if input is exactly zero
test("formats 0 seconds as 0s", () => {
    expect(formatDuration(0)).toBe("0s");
});

// Test-Case: throw an error if input is negative
test("throws error for negative seconds", () => {
    expect(() => formatDuration(-1)).toThrow("Duration cannot be negative");
});

// Test-Case: Check handling of proper rounding for decimal inputs
test("rounds decimal seconds", () => {
    expect(formatDuration(59.8)).toBe("1m");
    expect(formatDuration(59.2)).toBe("59s");
});