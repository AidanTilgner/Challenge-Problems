// I: "aabbbaa" O: 7

const count_palindromes_in_substring = (
  input: string,
  j: number,
  k: number
): number => {
  let count = 0;
  while (j >= 0 && k < input.length) {
    if (input[j] !== input[k]) {
      break;
    }
    count++;
    j--;
    k++;
  }
  return count;
};

const find_all_palindromes = (input: string) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += count_palindromes_in_substring(input, i - 1, i + 1);
    count += count_palindromes_in_substring(input, i, i + 1);
  }
  return count;
};

const str = "aabbbaa";
console.assert(
  find_all_palindromes(str) === 7,
  "Result was wrong, did not match expected result."
);
