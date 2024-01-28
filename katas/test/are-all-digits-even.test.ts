// Returns true if all the digits of a number are even
// returns false if any af the digist of a number is odd

import { areAllDigitsEven } from "../are-all-digits-even";

// TEST CASES:
// INPUT  |  OUTPUT
// 0      |  true
// 2      |  true
// 3      |  false
// 6      |  true
// 9      |  false
// 10     |  false
// 21     |  false
// 68     |  true
// 83     |  false
// 88     |  true
// 99     |  false
// 100    |  false
// 200    |  true
// 888    |  true
// 999    |  false
// 1000   |  false
// 1999   |  false
// 2000   |  true
// 8888   |  true
// 9999   |  false
// 10000  |  false
// 20000  |  true
// 88888  |  true
// 99999  |  false

describe("areAllDigitsEven", () => {
  describe("one digit", () => {
    const table = [
      { input: 0, expected: true },
      { input: 2, expected: true },
      { input: 3, expected: false },
      { input: 6, expected: true },
      { input: 9, expected: false },
    ];
    it.each(table)(
      "should return $expected is the input is $input",
      ({ input, expected }) => {
        // act
        const actual = areAllDigitsEven(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("two digits", () => {
    const table = [
      { input: 10, expected: false },
      { input: 21, expected: false },
      { input: 68, expected: true },
      { input: 83, expected: false },
      { input: 88, expected: true },
      { input: 98, expected: false },
      { input: 99, expected: false },
    ];
    it.each(table)(
      "should return $expected is the input is $input",
      ({ input, expected }) => {
        // act
        const actual = areAllDigitsEven(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("three digits", () => {
    const table = [
      { input: 888, expected: true },
      { input: 889, expected: false },
      { input: 998, expected: false },
      { input: 999, expected: false },
    ];
    it.each(table)(
      "should return $expected is the input is $input",
      ({ input, expected }) => {
        // act
        const actual = areAllDigitsEven(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("four digits", () => {
    const table = [
      { input: 1000, expected: false },
      { input: 1999, expected: false },
      { input: 2000, expected: true },
      { input: 8888, expected: true },
      { input: 9998, expected: false },
    ];
    it.each(table)(
      "should return $expected is the input is $input",
      ({ input, expected }) => {
        // act
        const actual = areAllDigitsEven(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("five digits", () => {
    const table = [
      { input: 10000, expected: false },
      { input: 20000, expected: true },
      { input: 88888, expected: true },
      { input: 88889, expected: false },
      { input: 99998, expected: false },
      { input: 99999, expected: false },
    ];
    it.each(table)(
      "should return $expected is the input is $input",
      ({ input, expected }) => {
        // act
        const actual = areAllDigitsEven(input);

        // assert
        expect(actual).toBe(expected);
      }
    );
  });
});
