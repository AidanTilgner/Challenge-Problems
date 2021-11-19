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

let groupAnagrams = (strs) => {
  let copyOfSTRs = [...strs];
  let anagrams = [];
  let track = 1;
  for (let i = 0; copyOfSTRs.length != 0; i) {
    let matches = [];
    let current = copyOfSTRs[i];
    matches.push(current);
    for (let j = 1; j < copyOfSTRs.length; j++) {
      if (copyOfSTRs.length === 1) break;
      if (validateAnagram(current, copyOfSTRs[j])) {
        matches.push(copyOfSTRs[j]);
      }
    }
    for (l of matches) {
      let index = copyOfSTRs.indexOf(l);
      copyOfSTRs.splice(index, 1);
    }
    anagrams.push(matches);
  }
  return anagrams;
};

console.log(groupAnagrams(["ac", "c"]));
