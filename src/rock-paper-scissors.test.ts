import { play } from "./rock-paper-scissors";

// Test-Case: testing for expected outcomes given combinations
describe("rock-paper-scissors game", () => {
  test.each([
    ["rock", "scissors", 1],
    ["paper", "rock", 1],
    ["scissors", "paper", 1],
    ["scissors", "rock", 2],
    ["rock", "paper", 2],
    ["paper", "scissors", 2],
    ["rock", "rock", 0],
    ["paper", "paper", 0],
    ["scissors", "scissors", 0],
  ])("%s vs %s should result in player %i winning", (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);
  });
});

// Test-Case: making sure it works regarless of whitespace and case
test("ignores case sensitivity", () => {
    expect(play("ROCK", "scissors")).toBe(1);
    expect(play("paper", "ROCK")).toBe(1);
});
  
  test("ignores whitespace", () => {
    expect(play(" rock ", "scissors")).toBe(1);
    expect(play("paper", " rock ")).toBe(1);
});

// Test-Case: throwing error for invalid inputs
test("throws error for invalid moves", () => {
    expect(() => play("invalid", "rock")).toThrow("Invalid move: invalid");
    expect(() => play("rock", "invalid")).toThrow("Invalid move: invalid");
});

