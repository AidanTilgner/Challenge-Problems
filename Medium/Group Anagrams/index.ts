const groupAnagrams = (words: string[]): string[][] => {
  const check: Map<string, string[]> = new Map();

  words.forEach((word) => {
    // TODO: Find a better way to check anagrams than having to sort the whole thing
    const sorted = word.split("").sort().join("");

    if (check.has(sorted)) {
      check.get(sorted)?.push(word);
      return;
    }

    check.set(sorted, [word]);
  });

  return [...check.values()];
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Grouped: ", groupAnagrams(strs));
