export enum FizzBuzzResult {
  FIZZ = "Fizz",
  BUZZ = "Buzz",
  FIZZBUZZ = "FizzBuzz",
}

interface FizzBuzzCase {
  isDivisibleByThree: boolean;
  isDivisibleByFive: boolean;
  result: FizzBuzzResult;
}

const FIZZ_BUZZ_CASES: FizzBuzzCase[] = [
  {
    isDivisibleByThree: true,
    isDivisibleByFive: false,
    result: FizzBuzzResult.FIZZ,
  },
  {
    isDivisibleByThree: false,
    isDivisibleByFive: true,
    result: FizzBuzzResult.BUZZ,
  },
  {
    isDivisibleByThree: true,
    isDivisibleByFive: true,
    result: FizzBuzzResult.FIZZBUZZ,
  },
];

export const FizzBuzz = (input: number) => {
  const isDivisibleByThree = input % 3 === 0;
  const isDivisibleByFive = input % 5 === 0;

  const currentScenario = FIZZ_BUZZ_CASES.find(
    (scenario) =>
      scenario.isDivisibleByThree === isDivisibleByThree &&
      scenario.isDivisibleByFive === isDivisibleByFive
  );

  if (currentScenario) {
    return currentScenario.result;
  }

  //   if (isDivisibleByThree && isDivisibleByFive) {
  //     return FizzBuzzResult.FIZZBUZZ;
  //   }
  //   if (isDivisibleByThree) {
  //     return FizzBuzzResult.FIZZ;
  //   }
  //   if (isDivisibleByFive) {
  //     return FizzBuzzResult.BUZZ;
  //   }

  return input.toString();
};
