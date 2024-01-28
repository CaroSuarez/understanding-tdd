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

describe("", () => {
  it.skip("", () => {});
});
