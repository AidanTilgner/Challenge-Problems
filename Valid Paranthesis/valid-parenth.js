/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


*/

let validateParenthesis = (s) => {
  // get the string into array format
  let parenthesis = s.split("");
  parenthesis;

  // create an array of opening parenthesis
  let open = [];
  let valid = true;

  parenthesis.forEach((p) => {
    // if it's an opening bracket
    if (p === "(" || p === "[" || p === "{") {
      // push it to the open array
      open.push(p);
      return;
    }

    open;

    // if it's a closing parenthesis
    switch (p) {
      case "}":
        // if it matches the last element in the open array, then we can pop that element
        // because it's closing those parenthesis
        if (open[open.length - 1] === "{") {
          open.pop();
        } else {
          // or else it's not valid because it's not closing the last open parenthesis
          valid = false;
        }
        break;
      case "]":
        // if it matches the last element in the open array, then we can pop that element
        // because it's closing those parenthesis
        if (open[open.length - 1] === "[") {
          open.pop();
        } else {
          valid = false;
        }
        break;
      case ")":
        // if it matches the last element in the open array, then we can pop that element
        // because it's closing those parenthesis
        if (open[open.length - 1] === "(") {
          open.pop();
        } else {
          valid = false;
        }
        break;
    }
  });

  return open.length === 0 && valid;
};

console.log(validateParenthesis("()[][][][][]"));
