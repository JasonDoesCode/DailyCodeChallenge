// Valid Parentheses

// Leetcode Link - https://leetcode.com/problems/valid-parenthese

// Problem Statement
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Examples
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Original Solution
// Create a stack and push left brackets as they appear -> when a right bracket appears pop off the top of the stack and check if the brackets match
// If they match, continue iterating, if they don't match return false
// If the we iterate through the whole string but the stack isn't empty, return false ( e.x scenario: '((' or '[{' )
var isValid = function (s) {
    //Use a stack -> push left chars on to the stack as they appear -> pop stack when right char appears and see if the char matches

    const brackets = []

    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (pairs.hasOwnProperty(s[i])) {
            brackets.unshift(s[i])
        } else {
            if (pairs[brackets.shift()] !== s[i]) {
                return false
            }
        }
    }


    if (brackets.length > 0) {
        return false
    }

    return true
};
