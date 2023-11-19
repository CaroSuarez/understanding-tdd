// The stages of naming:
// Meaningless
// Accurate
// Precise/Specific
// Meaninful

import { ageCalculator } from "../age-calculator";

// Task: Create a function that calculates an age given a birthday and a target date.

describe("ageCalculator", () => {
  describe("has had birthday this year", () => {
    const table = [
      { birthdate: "1990/01/03", targetdate: "2015/11/10", expected: 25 },
      { birthdate: "1987/04/28", targetdate: "2014/08/21", expected: 27 },
      { birthdate: "2015/03/10", targetdate: "2022/03/21", expected: 7 },
      { birthdate: "2000/08/08", targetdate: "2019/08/09", expected: 19 },
      { birthdate: "2004/02/28", targetdate: "2022/03/01", expected: 18 },
    ];

    test.each(table)(
      "given birthdate of $birthdate and targetdate of $targetdate it returns $expected",
      ({ birthdate, targetdate, expected }) => {
        // act
        const actual = ageCalculator(new Date(birthdate), new Date(targetdate));
        // assert
        expect(actual).toBe(expected);
      }
    );
  });

  describe("hasn't had birthday this year", () => {
    describe("targetdate month is different from the birthdate month", () => {
      const table = [
        { birthdate: "1990/09/03", targetdate: "2015/07/01", expected: 24 },
        { birthdate: "1987/04/28", targetdate: "2014/03/21", expected: 26 },
        { birthdate: "2015/03/10", targetdate: "2022/02/21", expected: 6 },
      ];

      test.each(table)(
        "given birthdate of $birthdate and targetdate of $targetdate it returns $expected",
        ({ birthdate, targetdate, expected }) => {
          // act
          const actual = ageCalculator(
            new Date(birthdate),
            new Date(targetdate)
          );
          // assert
          expect(actual).toBe(expected);
        }
      );
    });

    describe("targetdate month is the same as birthdate month", () => {
      const table = [
        { birthdate: "1990/01/03", targetdate: "2015/01/01", expected: 24 },
        { birthdate: "1943/11/05", targetdate: "2006/11/04", expected: 62 },
        { birthdate: "2000/08/08", targetdate: "2019/08/07", expected: 18 },
        { birthdate: "2000/08/28", targetdate: "2019/08/01", expected: 18 },
      ];

      test.each(table)(
        "given birthdate of $birthdate and targetdate of $targetdate it returns $expected",
        ({ birthdate, targetdate, expected }) => {
          // act
          const actual = ageCalculator(
            new Date(birthdate),
            new Date(targetdate)
          );
          // assert
          expect(actual).toBe(expected);
        }
      );
    });
  });

  describe("Its the birthday", () => {
    const table = [
      { birthdate: "1990/01/03", targetdate: "2015/01/03", expected: 25 },
      { birthdate: "1987/04/28", targetdate: "2014/04/28", expected: 27 },
      { birthdate: "2015/03/10", targetdate: "2022/03/10", expected: 7 },
      { birthdate: "1974/06/25", targetdate: "2025/06/25", expected: 51 },
      { birthdate: "2000/08/08", targetdate: "2019/08/08", expected: 19 },
    ];

    test.each(table)(
      "given birthdate of $birthdate and targetdate of $targetdate it returns $expected",
      ({ birthdate, targetdate, expected }) => {
        // act
        const actual = ageCalculator(new Date(birthdate), new Date(targetdate));
        // assert
        expect(actual).toBe(expected);
      }
    );
  });
});
