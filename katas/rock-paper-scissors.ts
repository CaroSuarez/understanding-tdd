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

export interface GameCase {
  PLAYER_MOVE: Show;
  OPPONENT_MOVE: Show;
  RESULT: Result;
}

export const NO_TIE_GAME_CASES: GameCase[] = [
  {
    PLAYER_MOVE: Show.ROCK,
    OPPONENT_MOVE: Show.SCISSORS,
    RESULT: Result.PLAYER_WINS,
  },
  {
    PLAYER_MOVE: Show.PAPER,
    OPPONENT_MOVE: Show.ROCK,
    RESULT: Result.PLAYER_WINS,
  },
  {
    PLAYER_MOVE: Show.SCISSORS,
    OPPONENT_MOVE: Show.PAPER,
    RESULT: Result.PLAYER_WINS,
  },
  {
    PLAYER_MOVE: Show.ROCK,
    OPPONENT_MOVE: Show.PAPER,
    RESULT: Result.PLAYER_LOSES,
  },
  {
    PLAYER_MOVE: Show.PAPER,
    OPPONENT_MOVE: Show.SCISSORS,
    RESULT: Result.PLAYER_LOSES,
  },
  {
    PLAYER_MOVE: Show.SCISSORS,
    OPPONENT_MOVE: Show.ROCK,
    RESULT: Result.PLAYER_LOSES,
  },
];

export const rockPaperScissors = (playerMove: string, opponentMove: string) => {
  const tie = playerMove === opponentMove;
  const gameCase = NO_TIE_GAME_CASES.find(
    (gameCase) =>
      gameCase.PLAYER_MOVE === playerMove &&
      gameCase.OPPONENT_MOVE === opponentMove
  );

  if (tie) {
    return Result.TIE;
  }

  return gameCase?.RESULT;
};
