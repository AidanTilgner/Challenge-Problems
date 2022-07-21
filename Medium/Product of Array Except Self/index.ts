// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const prodOfArrayExceptSelf = (nums: number[]) => {
  const output: number[] = [];

  // [1, 2, 3, 4]
  // [1, 1, 2, 6]
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }
  console.log("Output before: ", output);

  // [24, 12, 8, 6]
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(
      "Multiplying: ",
      `${output[i]} * ${postfix} = ${output[i] * postfix}`
    );
    output[i] *= postfix;
    postfix *= nums[i];
  }

  return output;
};

const input = [1, 2, 3, 4];
console.log("Output: ", prodOfArrayExceptSelf(input));
