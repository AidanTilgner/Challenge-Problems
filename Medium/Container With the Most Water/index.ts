// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

const containerWithMostWater = (walls: number[]): number => {
  let max = 0;
  let i = 0;
  let j = walls.length - 1;

  while (i < j) {
    const area = (j - i) * Math.min(walls[i], walls[j]);
    if (area > max) {
      max = area;
    }

    if (walls[i] < walls[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};

let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log("Output: ", containerWithMostWater(input));
