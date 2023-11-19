// TDD cycle:
// red > green > reflect > refactor

import { FizzBuzz, FizzBuzzResult } from "../fizz-buzz";

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

// Task:
//  Create a function that takes in a natural number (numeros enteros positivos)
//  and returns a string with the following rules:

//  * If the number is divisible by 3, return 'Fizz'
//  * If the number is divisible by 5, return 'Buzz'
//  * If the number is divisible by 3 and 5, return 'FizzBuzz'
//  * Otherwise, return the number itself as a string

// TEST CASES:
// INPUT (number)   |  OUTPUT (string)
// 1                |  1
// 2                |  2
// 3                |  Fizz
// 4                |  4
// 5                |  Buzz
// 6                |  Fizz
// 7                |  7
// 8                |  8
// 9                |  Fizz
// 10               |  Buzz
// 15               |  FizzBuzz
// 16               |  16
// 20               |  Buzz
// 30               |  FizzBuzz
// 75               |  FizzBuzz
// 77               |  77

// EQUIVALENCE PARTITION
// Fizz: 3, 6, 9, 12, 15, 18, 21, 24, 27 ...
// Buzz: 5, 10, 20, 25, 35, 40, 50 ...
// FizzBuzz: 15, 30, 45 ...
// Whizz: 2, 7, 11, 13 ...
// Other: 1, 4, 8 ...

// BOUNDARIES
// In this example the boundary tests are less valuable, we can't simply test at the boundary because
// there are not clear boundary numbers. Son instead what we do is identify the equivalence partitions
// and we write test for at least three values in each equivalence partition.

describe("Fizz Buzz", () => {
  describe("The number is divisible by 3", () => {
    const table = [
      { input: 3, expected: FizzBuzzResult.FIZZ },
      { input: 6, expected: FizzBuzzResult.FIZZ },
      { input: 9, expected: FizzBuzzResult.FIZZ },
      { input: 153, expected: FizzBuzzResult.FIZZ },
    ];

    it.each(table)("Should return Fizz", ({ input, expected }) => {
      // Act
      const actual = FizzBuzz(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("The number is divisible by 5", () => {
    const table = [
      { input: 5, expected: FizzBuzzResult.BUZZ },
      { input: 10, expected: FizzBuzzResult.BUZZ },
      { input: 20, expected: FizzBuzzResult.BUZZ },
      { input: 155, expected: FizzBuzzResult.BUZZ },
    ];

    it.each(table)("Should return Buzz", ({ input, expected }) => {
      // Act
      const actual = FizzBuzz(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("The number is divisible by 3 and 5", () => {
    const table = [
      { input: 15, expected: FizzBuzzResult.FIZZBUZZ },
      { input: 30, expected: FizzBuzzResult.FIZZBUZZ },
      { input: 45, expected: FizzBuzzResult.FIZZBUZZ },
      { input: 75, expected: FizzBuzzResult.FIZZBUZZ },
    ];

    it.each(table)("Should return FizzBuzz", ({ input, expected }) => {
      // Act
      const actual = FizzBuzz(input);

      // Assert
      expect(actual).toBe(expected);
    });
  });

  describe("The number is not divisible by 3 nor by 5", () => {
    const table = [
      { input: 2, expected: "2" },
      { input: 4, expected: "4" },
      { input: 7, expected: "7" },
      { input: 8, expected: "8" },
      { input: 16, expected: "16" },
      { input: 77, expected: "77" },
    ];

    it.each(table)(
      "Should return the same input as a string",
      ({ input, expected }) => {
        // Act
        const actual = FizzBuzz(input);

        // Assert
        expect(actual).toBe(expected);
      }
    );
  });
});
