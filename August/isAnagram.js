// 242. Valid Anagram

// Leetcode Link - https://leetcode.com/problems/valid-anagram/

// Problem Statement
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Examples
// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// My Solution
// Time Complexity is a little high O(n log n)
// However, code is clear, readable, and neat
var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}

// Second Solution
// Unsure of time complexity because we go through both the string an an array
// O(n + ?)
// Create array with values set to 0
// increase alphabet correlated index if it appears in string s
// decrease alphabet correlated index if it appears in string t
// if there are any non-zero values in the array return false
// else, return true
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }

    letterCount = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        letterCount[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
        letterCount[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1
    }

    for (let i = 0; i < letterCount.length; i++) {
        if (letterCount[i] !== 0) {
            return false
        }
    }

    return true

};
