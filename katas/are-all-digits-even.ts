export const areAllDigitsEven = (num: number) => {
  return num
    .toString()
    .split("")
    .map((digit) => parseInt(digit) % 2 === 0)
    .every((result) => result === true);
};
