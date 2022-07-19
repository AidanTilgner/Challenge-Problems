// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// Easiest solution is to print all possible random combinations by brute force
// - Initialize array of all of the characters you're allowed to use
// - All start with an opening and end with an ending

function print_all_braces_rec(
  n: number,
  left_count: number,
  right_count: number,
  output: string,
  result: string[][]
) {
  if (left_count >= n && right_count >= n) {
    result.push([...output]);
  }

  if (left_count < n) {
    output += "(";
    print_all_braces_rec(n, left_count + 1, right_count, output, result);
    output = output.slice(0, output.length - 1);
  }

  if (right_count < left_count) {
    output += ")";
    print_all_braces_rec(n, left_count, right_count + 1, output, result);
    output = output.slice(0, output.length - 1);
  }
}

function print_all_braces(n: number): string[][] {
  let output: string = "";
  let result = [];
  print_all_braces_rec(n, 0, 0, output, result);
  return result;
}

let result = print_all_braces(3);

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(""));
}
