/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 */

// let validateAnagram1 = (s, t) => {
//   let tMatches = [];
//   let sVer = s.split("");
//   t.split("").forEach((letter, index) => {
//     let sIndex = sVer.indexOf(letter); // Check to Veree if the letter is in the string
//     console.log(sIndex);
//     sIndex !== -1 && sVer.splice(sIndex, 1); // if it is, remove that letter from the array
//     tMatches.push(sIndex); //and also push the index to the tMatches array
//   });

//   if (tMatches.length === s.length && !tMatches.includes(-1)) return true;
//   return false;
// };

let validateAnagram = (s, t) => {
  let sLetters = s.split("");
  let tLetters = t.split("");
  if (sLetters.length !== tLetters.length) return false;
  let valid = true;
  for (let i = 0; i < tLetters.length; i++) {
    let sIndex = sLetters.indexOf(tLetters[i]);
    if (sIndex === -1) {
      valid = false;
      break;
    }
    sLetters.splice(sIndex, 1);
  }
  return valid;
};

let s = "ac";
let t = "c";
console.log(validateAnagram(s, t));

module.exports = validateAnagram;
