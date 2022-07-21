const kMostFrequent = (nums: number[], k: number): number[] => {
  const check: { [key: string]: number } = {};
  nums.forEach((num) => {
    if (check[num]) {
      check[num] += 1;
      return;
    }

    check[num] = 1;
  });
  console.log("Check: ", check);

  const sorted: number[] = [];
  for (let i in check) {
    sorted.push(check[i]);
  }
  const results = sorted.sort().reverse().slice(0, k);

  return results;
};

let nums = [1, 1, 1, 2, 2, 3, 3, 3];
let k = 2;
console.log("Kth: ", kMostFrequent(nums, k));
