export const stringCalculator = (stringNumber: string) => {
  let delimiter = ",";
  let input = stringNumber;

  if (stringNumber.startsWith("//")) {
    delimiter = stringNumber.charAt(2);
    input = stringNumber.slice(3);
  }

  if (!stringNumber.length) {
    return 0;
  }

  const stringNumberWithOnlyDelimiter = input.replaceAll("\n", delimiter);
  const stringNumbersArray = stringNumberWithOnlyDelimiter.split(delimiter);
  const numbersArray = stringNumbersArray.map((numberAsString) => {
    if (numberAsString) {
      const parsedNumber = parseInt(numberAsString);
      return parsedNumber > 1000 ? 0 : parsedNumber;
    } else {
      return 0;
    }
  });

  const negativeNumbers = numbersArray.filter((n) => n < 0);

  if (negativeNumbers.length) {
    throw new Error(`negatives not allowed: ${negativeNumbers.toString()}`);
  }
  return numbersArray.reduce((current, total) => total + current);
};
