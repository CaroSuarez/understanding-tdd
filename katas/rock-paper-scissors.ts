export enum Show {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

export enum Result {
  TIE = "Tie",
  PLAYER_LOSES = "Player loses",
  PLAYER_WINS = "Player wins",
}

export const rockPaperScissors = (playerMove: string, opponentMove: string) => {
  const tie = playerMove === opponentMove;
  const playerLoses =
    (playerMove === Show.ROCK && opponentMove === Show.PAPER) ||
    (playerMove === Show.PAPER && opponentMove === Show.SCISSORS) ||
    (playerMove === Show.SCISSORS && opponentMove === Show.ROCK);

  const playerWins =
    (playerMove === Show.ROCK && opponentMove === Show.SCISSORS) ||
    (playerMove === Show.PAPER && opponentMove === Show.ROCK) ||
    (playerMove === Show.SCISSORS && opponentMove === Show.PAPER);

  if (tie) {
    return Result.TIE;
  }
  if (playerLoses) {
    return Result.PLAYER_LOSES;
  }
  if (playerWins) {
    return Result.PLAYER_WINS;
  }

  return Result.TIE;
};
