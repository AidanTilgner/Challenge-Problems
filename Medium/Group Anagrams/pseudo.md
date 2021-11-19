Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

IDEA: Iterate through array. If two words are in fact anagrams, then they will have the same length of letters
and both contain the same ones. We can use the valid anagram function for testing that. If a match is found, pop out the matching index, so that we won't check it in later testing. For each index, test every other element, and then remove the index when found.

- Copy the strs array into something we can modify
- Create an array for valid anagrams
- Iterate through each string in the array
- For each string, create a matches array
- Add the current index to the array
- Iterate through every other index
- If the string is a match, add it to the matches array and remove it from the strings copy
- Add the matches array to the valid anagrams array
- At the end of an iteration for a given string, remove itself from the array as it's done testing

<script>
    function GroupAnagrams (strs) {
        copy strs array
        create ValidAnagrams array
        for (each string in string array) {
            create matches array
            add current index
            for (every string in strings array) {
                if (indexes are the same) continue
                if(validateAnagram(first string, second string)) {
                    matches.push(second string)
                    copy array.splice(second index, 1)
                }
            }
            copy.splice(first index, 1)
        }

        return validAnagramsArray
    }
</script>
