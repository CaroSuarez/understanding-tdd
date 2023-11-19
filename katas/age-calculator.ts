const hasHadBirthday = (birthdate: Date, targetdate: Date) => {
  return (
    (targetdate.getMonth() === birthdate.getMonth() &&
      targetdate.getDate() >= birthdate.getDate()) ||
    targetdate.getMonth() > birthdate.getMonth()
  );
};

export const ageCalculator = (birthdate: Date, targetdate: Date) => {
  const completedYears = targetdate.getFullYear() - birthdate.getFullYear();

  if (hasHadBirthday(birthdate, targetdate)) {
    return completedYears;
  }
  return completedYears - 1;
};
