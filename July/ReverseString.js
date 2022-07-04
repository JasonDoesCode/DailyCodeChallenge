// Reverse String

// CodeWars Link - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript

// Problem Statement
// Complete the solution so that it reverses the string passed into it. 

// Example
// 'world'  =>  'dlrow'
// 'word'   => 'drow'

// My Solution
// split the string into an array
// reverse the array
// join the array into a string
function solution(str) {
    return str.split('').reverse().join('');
}