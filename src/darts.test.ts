import { calcPoints, possibleCheckout } from "./darts";

// Test-Case: check if points are calculated correctly
describe("Darts points calculation", () => {
  test("calculates simple hits", () => {
    expect(calcPoints("1 20")).toBe(20);
    expect(calcPoints("1 5")).toBe(5);
  });
  
  test("calculates double hits", () => {
    expect(calcPoints("2 20")).toBe(40);
    expect(calcPoints("2 10")).toBe(20);
  });
  
  test("calculates triple hits", () => {
    expect(calcPoints("3 20")).toBe(60);
    expect(calcPoints("3 10")).toBe(30);
  });
  
  test("calculates mixed hits", () => {
    expect(calcPoints("3 20 1 5")).toBe(65); // Triple 20, Single 5
    expect(calcPoints("3 20 1 17 2 4")).toBe(85); // Triple 20, Single 17, Double 4
  });
});

// Test-Case: testing the checkouts
describe("Darts checkout possibilities", () => {
    test("calculates possible double checkouts", () => {
      expect(possibleCheckout(477)).toBe("Double 12");
      expect(possibleCheckout(483)).toBe("Double 9");
    });
    
    test("handles impossible checkouts", () => {
      expect(possibleCheckout(480)).toBe("No checkout possible");
      expect(possibleCheckout(441)).toBe("No checkout possible");
    });
});

// Test-Case: testing the bullseye mechanic
test("handles bull's eye checkout", () => {
    expect(possibleCheckout(451)).toBe("Double 25"); // Bull's eye (25) counts as double in this case
});
