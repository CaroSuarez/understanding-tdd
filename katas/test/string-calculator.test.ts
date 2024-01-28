// Task:
// 1. Create a simple String calculator with the signature: function add(input: string): number
// 1.1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it
// will return 0) for example “” or “1” or “1,2”
// 1.2. Start with the simplest test case of an empty string, then move to one and two numbers
// 2. Allow the add() function to handle an unknown amount of numbers
// 3. Allow the add() function to handle new lines between numbers (in addition to commas).
// 3.1. the following input is ok: “1\n2,3” (will equal 6)
// 3.2. the following input DOES NOT need to be handled: “1,\n” (not need to prove it - just
// clarifying)
// 4. Support different delimiters
// 4.1. To change a delimiter, the beginning of the string will contain a separate line
// specifying the custom delimiter. This input looks like this: “//{delimiter}\n{numbers…}”
// (Note that the curly braces are representing the sections of the input and are not input
// formatting).
// 4.2. For example: “//;\n1;2” should return a result of 3 because the delimiter is now ‘;’.
// 4.3. The first line is optional (all existing scenarios should still be supported).
// 4.4. Do not worry about supporting the specification of ‘\n’ as an explicit custom delimiter.
// New lines should always be supported as delimiters in your number string.
// 5. Calling add() with a negative number in the input will throw an exception “negatives not
// allowed” - and the negative that was passed, if there are multiple negatives, show all of
// them in the exception message
// 6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

import { stringCalculator } from "../string-calculator";

describe("string calculator", () => {
  describe("should return zero given an empty string input", () => {
    // arrange
    const stringInput = "";
    const expected = 0;

    // act
    const actual = stringCalculator(stringInput);

    // assert
    expect(actual).toBe(expected);
  });

  describe("single number string should return that same number as number", () => {
    const table = [
      { stringInput: "0", expected: 0 },
      { stringInput: "1", expected: 1 },
      { stringInput: "9", expected: 9 },
      { stringInput: "10", expected: 10 },
      { stringInput: "50", expected: 50 },
      { stringInput: "99", expected: 99 },
      { stringInput: "100", expected: 100 },
      { stringInput: "999", expected: 999 },
      { stringInput: "1000", expected: 1000 },
      { stringInput: "1999", expected: 1999 },
      { stringInput: "10000", expected: 10000 },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });

  describe("two numbers string separated with comma should return the sum of those numbers", () => {
    const table = [
      { stringInput: "5,4", expected: 9 },
      { stringInput: "6,3", expected: 9 },
      { stringInput: "11,7", expected: 18 },
      { stringInput: "11,17", expected: 28 },
      { stringInput: "99,99", expected: 198 },
      { stringInput: "100,99", expected: 199 },
      { stringInput: "99,100", expected: 199 },
      { stringInput: "100,100", expected: 200 },
      { stringInput: "100,1", expected: 101 },
      { stringInput: "1,100", expected: 101 },
      { stringInput: "100,10", expected: 110 },
      { stringInput: "10,100", expected: 110 },
      { stringInput: "998,1", expected: 999 },
      { stringInput: "1,998", expected: 999 },
      { stringInput: "999,1", expected: 1000 },
      { stringInput: "1,999", expected: 1000 },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });

  describe("three numbers string separated with comma should return the sum of those numbers", () => {
    const table = [
      { stringInput: "1, 2, 3", expected: 6 },
      { stringInput: "10, 2, 3", expected: 15 },
      { stringInput: "10, 20, 3", expected: 33 },
      { stringInput: "10, 20, 30", expected: 60 },
      { stringInput: "100, 20, 30", expected: 150 },
      { stringInput: "100, 200, 30", expected: 330 },
      { stringInput: "100, 200, 300", expected: 600 },
      { stringInput: "1000, 200, 300", expected: 1500 },
      { stringInput: "1000, 2000, 300", expected: 3300 },
      { stringInput: "1000, 2000, 3000", expected: 6000 },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });

  describe("stringCalculator should be able to handle unkown amount of numbers", () => {
    const table = [
      { stringInput: "1, 2, 3", expected: 6 },
      { stringInput: "10, 2, 3, 2000", expected: 2015 },
      { stringInput: "10", expected: 10 },
      { stringInput: "10, 20, 30, 1, 2, 7, 80", expected: 150 },
      {
        stringInput: "100, 20, 30, 1, 10, 99, 1000, 600, 3, 6, 8, 11, 25, 643",
        expected: 2556,
      },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });

  describe("stringCalculator handles new lines between numbers (in addition to commas)", () => {
    const table = [
      { stringInput: "1\n2,3", expected: 6 },
      { stringInput: "1\n2,3\n,4,\n,5\n6", expected: 21 },
      { stringInput: "1,\n", expected: 1 },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });

  describe("stringCalculator supports different delimiters", () => {
    const table = [
      { stringInput: "//;\n1;2", expected: 3 },
      { stringInput: "//?\n10?34", expected: 44 },
      { stringInput: "//.\n777.52", expected: 829 },
      { stringInput: "//´\n1964´7325", expected: 9289 },
    ];
    it.each(table)(
      "should return $expected given an string input $stringInput",
      ({ stringInput, expected }) => {
        //act
        const actual = stringCalculator(stringInput);
        expect(actual).toBe(expected);
      }
    );
  });
});
