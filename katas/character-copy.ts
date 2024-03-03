export interface sourceFunction {
  (): string;
}
export interface destinationFunction {
  (characters: string): void;
}

export const characterCopy = (
  source: sourceFunction,
  destination: destinationFunction
) => {
  const newlineCharacter = "n";
  let sourceCharacter = source();

  if (sourceCharacter !== "n") {
    destination(sourceCharacter);
    sourceCharacter = source();
  }
};
