// Test doubles
// * Fakes
// * Stubs
// * Mocks

import { characterCopy } from "../character-copy";

// Kata: Character characterCopy
// Task: Write a Copier class with a copy() method on it. When
// the copy() method is called, the copier should read from a Source
// one character at a time and write this character to a Destination.
// It should do it repeateadly until a newline ('/n') is encountered
// when reading, at which point it should stop, without writing the
// newline to the Destination.
// Do the above using 'real' Source and Destination implementations
// test doubles should be used for these.

describe("characterCopy", () => {
  describe("no character", () => {
    const table = [
      { char: undefined },
      { char: null },
      { char: NaN },
      { char: "" },
    ];
    it.each(table)(
      "should return empty string when nothin in source",
      ({ char }) => {
        // arrange
        const mockSource = jest.fn();
        mockSource.mockReturnValue(char);
        const mockDestination = jest.fn();
        // act
        characterCopy(mockSource, mockDestination);
        // assert
        expect(mockSource).toHaveBeenCalledTimes(1);
        expect(mockDestination).toHaveBeenCalledTimes(1);
        expect(mockDestination).toHaveBeenCalledWith(char);
      }
    );
  });
  describe("newline", () => {
    const table = [{ char: "/n" }];
    it.each(table)(
      "should return empty string when only newline",
      ({ char }) => {
        // arrange
        const mockSource = jest.fn();
        mockSource.mockReturnValue(char);
        const mockDestination = jest.fn();
        // act
        characterCopy(mockSource, mockDestination);
        // assert
        expect(mockSource).toHaveBeenCalledTimes(1);
        expect(mockDestination).toHaveBeenCalledTimes(0);
      }
    );
  });
  describe("one character", () => {
    const table = [
      { char: "l" },
      { char: "1" },
      { char: "a" },
      { char: "b" },
      { char: "!" },
    ];
    it.each(table)("should return $char for string $char", ({ char }) => {
      // arrange
      const mockSource = jest.fn();
      mockSource.mockReturnValue(char);
      const mockDestination = jest.fn();
      // act
      characterCopy(mockSource, mockDestination);
      // assert
      expect(mockSource).toHaveBeenCalledTimes(1);
      expect(mockDestination).toHaveBeenCalledTimes(1);
      expect(mockDestination).toHaveBeenCalledWith(char);
    });
  });
  describe("one character and newline", () => {
    const table = [
      { chars: ["l", "n"] },
      { chars: ["1", "n"] },
      { chars: ["a", "n"] },
      { chars: ["b", "n"] },
      { chars: ["!", "n"] },
    ];
    it.each(table)("should return $chars for string $chars", ({ chars }) => {
      // arrange
      const mockSource = jest.fn();
      mockSource.mockReturnValue("n");
      mockSource.mockReturnValueOnce(chars[0]);
      mockSource.mockReturnValueOnce(chars[1]);
      const mockDestination = jest.fn();
      // act
      characterCopy(mockSource, mockDestination);
      // assert
      expect(mockSource).toHaveBeenCalledTimes(1);
      //   expect(mockDestination).toHaveBeenCalledTimes(1);
      //   expect(mockDestination).toHaveBeenCalledWith(chars[0]);
    });
  });
});
