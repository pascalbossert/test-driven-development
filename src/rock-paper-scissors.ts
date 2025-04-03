// Rock-Paper-Scissors
export function play(player1: string, player2: string): number {
  const validMoves = ["rock", "paper", "scissors"];
  
  const normalizedPlayer1 = player1.trim().toLowerCase();
  const normalizedPlayer2 = player2.trim().toLowerCase();
  
  if (!validMoves.includes(normalizedPlayer1)) {
    throw new Error(`Invalid move: ${normalizedPlayer1}`);
  }
  
  if (!validMoves.includes(normalizedPlayer2)) {
    throw new Error(`Invalid move: ${normalizedPlayer2}`);
  }
  
  if (normalizedPlayer1 === normalizedPlayer2) {
    return 0; // Tie
  }
  
  if (
    (normalizedPlayer1 === "rock" && normalizedPlayer2 === "scissors") ||
    (normalizedPlayer1 === "paper" && normalizedPlayer2 === "rock") ||
    (normalizedPlayer1 === "scissors" && normalizedPlayer2 === "paper")
  ) {
    return 1; // Player 1 wins
  }
  
  return 2; // Player 2 wins
}