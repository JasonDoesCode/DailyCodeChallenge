// Valid Palindrome

// LeetCode Link - https://leetcode.com/problems/valid-palindrome/

// Problem statement
// Given a string s, return true if it is a palindrome, or false otherwise.

// Convert given string to lowercase and remove all non-alphanumeric chars from string
// split the string into an array, reverse the array, join the array and compare it to the original string
// return the result of the comparison

// My Solution
var isPalindrome = function (s) {
    const palindrome = s.toLowerCase().replace(/[^0-9a-z]/g, '')
    return (palindrome === palindrome.split('').reverse().join(''))
};

// Notably, we could take two pointers to the middle of the string and traverse outwards
// If we reach the end of the string, it is a palindrome
// If a non-match is found, exit the loop and return false
// This method would proably be better in terms of time complexity and memory
// However, it would make the code less clean and less readable