// 383. Ransom Note

// Leetcode Link - https://leetcode.com/problems/ransom-note/

// Problem Statement
// Given two strings ransomNote and magazine, 
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Examples
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// My Solution
var canConstruct = function (ransomNote, magazine) {

    if (magazine.length < ransomNote.length) {
        return false
    }

    magHash = {}

    for (let i = 0; i < magazine.length; i++) {

        if (magHash.hasOwnProperty(magazine[i])) {
            magHash[magazine[i]]++
        } else {
            magHash[magazine[i]] = 1
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {

        if (magHash.hasOwnProperty(ransomNote[i])) {
            magHash[ransomNote[i]]--

            if (magHash[ransomNote[i]] < 0) {
                return false
            }
        } else {
            return false
        }
    }

    return true
};