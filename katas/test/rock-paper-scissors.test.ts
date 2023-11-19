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
    const table = [
      {
        playerMove: Show.ROCK,
        opponentMove: Show.SCISSORS,
        expected: Result.PLAYER_WINS,
      },
      {
        playerMove: Show.PAPER,
        opponentMove: Show.ROCK,
        expected: Result.PLAYER_WINS,
      },
      {
        playerMove: Show.SCISSORS,
        opponentMove: Show.PAPER,
        expected: Result.PLAYER_WINS,
      },
    ];

    test.each(table)(
      "Player moves $playerMove and opponent moves $opponentMove",
      ({ playerMove, opponentMove, expected }) => {
        // Act
        const actual = rockPaperScissors(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("Player loses", () => {
    const table = [
      {
        playerMove: Show.ROCK,
        opponentMove: Show.PAPER,
        expected: Result.PLAYER_LOSES,
      },
      {
        playerMove: Show.PAPER,
        opponentMove: Show.SCISSORS,
        expected: Result.PLAYER_LOSES,
      },
      {
        playerMove: Show.SCISSORS,
        opponentMove: Show.ROCK,
        expected: Result.PLAYER_LOSES,
      },
    ];

    test.each(table)(
      "Player loses",
      ({ playerMove, opponentMove, expected }) => {
        // Act
        const actual = rockPaperScissors(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("Tie", () => {
    const table = [
      {
        playerMove: Show.ROCK,
        opponentMove: Show.ROCK,
        expected: Result.TIE,
      },
      {
        playerMove: Show.PAPER,
        opponentMove: Show.PAPER,
        expected: Result.TIE,
      },
      {
        playerMove: Show.SCISSORS,
        opponentMove: Show.SCISSORS,
        expected: Result.TIE,
      },
    ];

    test.each(table)("Tie", ({ playerMove, opponentMove, expected }) => {
      // Act
      const actual = rockPaperScissors(playerMove, opponentMove);
      // Assert
      expect(actual).toBe(expected);
    });
  });
});

// NOTE: It is important to note that there is a table and test.each for each equivalence partition. So
// it is better organized than having just one table and test covering all the cases.
