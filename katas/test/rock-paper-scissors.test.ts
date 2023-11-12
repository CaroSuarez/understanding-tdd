// TDD cycle:
// red > green > reflect > refactor

// Three rules:
// 1. You are not allowed to write any production code unless it
// is to make a failing unit test pass.
// 2. You are not allowed to write any more of a unit test than is
// sufficient to fail; and compilation failures are failures.
// 3. You are not allowed to write any more production code than is
// sufficient to pass the one failing unit test.

// Parafraseando las reglas un poco:
// 1. Solamente puedo escribir código de producción inicialmente si es para
// hacer que un test que está fallando pase.
// 2. Solamente puedo escribir el código necesario en un test unitario
// como para hacerlo fallar.
// 3. Solamente puedo escribir el código de producción adicional como para hacer que el
// test que está fallando pase.

// TEST CASES:
// PLAYER MOVE   |  OPPONENT MOVE   |   RESULT
// Rock          |  Rock            |   Tie
// Rock          |  Paper           |   Player loses
// Rock          |  Scissors        |   Player wins
// Paper         |  Rock            |   Player wins
// Paper         |  Paper           |   Tie
// Paper         |  Scissors        |   Player loses
// Scissors      |  Rock            |   Player loses
// Scissors      |  Paper           |   Player wins
// Scissors      |  Scissors        |   Tie

import { Result, rockPaperScissors, Show } from "../rock-paper-scissors";

describe("rockPaperScissors", () => {
  describe("Player wins", () => {
    test("Given a player who shows ROCK and an opponent who shows SCISSORS then return Player wins", () => {
      // Arrange
      const playerMove = Show.ROCK;
      const opponentMove = Show.SCISSORS;
      const expected = Result.PLAYER_WINS;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows PAPER and an opponent who shows ROCK then return Player wins", () => {
      // Arrange
      const playerMove = Show.PAPER;
      const opponentMove = Show.ROCK;
      const expected = Result.PLAYER_WINS;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows SCISSORS and an opponent who shows PAPER then return Player wins", () => {
      // Arrange
      const playerMove = Show.SCISSORS;
      const opponentMove = Show.PAPER;
      const expected = Result.PLAYER_WINS;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("Player loses", () => {
    test("Given a player who shows ROCK and an opponent who shows PAPER then return Player loses", () => {
      // Arrange
      const playerMove = Show.ROCK;
      const opponentMove = Show.PAPER;
      const expected = Result.PLAYER_LOSES;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows PAPER and an opponent who shows SCISSORS then return Player loses", () => {
      // Arrange
      const playerMove = Show.PAPER;
      const opponentMove = Show.SCISSORS;
      const expected = Result.PLAYER_LOSES;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows SCISSORS and an opponent who shows ROCK then return Player loses", () => {
      // Arrange
      const playerMove = Show.SCISSORS;
      const opponentMove = Show.ROCK;
      const expected = Result.PLAYER_LOSES;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("Tie", () => {
    test("Given a player who shows ROCK and an opponent who shows ROCK then return tie", () => {
      // Arrange
      const playerMove = Show.ROCK;
      const opponentMove = Show.ROCK;
      const expected = Result.TIE;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows PAPER and an opponent who shows PAPER then return Tie", () => {
      // Arrange
      const playerMove = Show.PAPER;
      const opponentMove = Show.PAPER;
      const expected = Result.TIE;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });

    test("Given a player who shows SCISSORS and an opponent who shows SCISSORS then return tie", () => {
      // Arrange
      const playerMove = Show.SCISSORS;
      const opponentMove = Show.SCISSORS;
      const expected = Result.TIE;

      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
