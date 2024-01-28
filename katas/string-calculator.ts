export const stringCalculator = (stringNumber: string) => {
  let delimiter = ",";
  let input = stringNumber;

  if (stringNumber.slice(0, 2) === "//") {
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
      return parseInt(numberAsString);
    } else {
      return 0;
    }
  });
  return numbersArray.reduce((current, total) => total + current);
};
