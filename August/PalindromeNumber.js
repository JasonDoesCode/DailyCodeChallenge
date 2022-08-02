// Palindrome Number

// Leetcode Easy

// Problem Statement
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// Example
// 121 is a palindrome while 123 is not.


// My Solution
// convert the number to a string and then reverse the string and compare the two values to each other
var isPalindrome = function (x) {
    return String(x) === String(x).split("").reverse().join("");
};


// Better Solution

