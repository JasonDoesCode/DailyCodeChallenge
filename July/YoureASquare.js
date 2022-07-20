// You're a Square

// CodeWars Link - https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

// Problem Statement
// Given an integral number, determine if it's a square number

// Examples
// -1  => false
// 0  => true
// 3  => false
// 4  => true
// 25  => true
// 26  => false

// My Solution
var isSquare = function (n) {

    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    }

    return false;
}

// Better Solution
// Doesn't rely on Number.isInteger() function
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}