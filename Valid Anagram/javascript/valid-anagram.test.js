const { expect } = require("@jest/globals");
const validateAnagram = require("./valid-anagram");
test("Returns true for a valid anagram", () => {
  let s = "read";
  let t = "dear";
  expect(validateAnagram(s, t)).toBe(true);
});

test("Returns false for invalid anagram", () => {
  let a = "read";
  let b = "dearo";
  expect(validateAnagram(a, b)).toBe(false);
});
