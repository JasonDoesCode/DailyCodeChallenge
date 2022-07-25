// Get Middle Character

// CodeWars Link - https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

// Problem Statement
// return the middle character of the word.
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// Example
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// MySolution
function getMiddle(s) {
    let slen = s.length;

    if (slen % 2 == 0) {
        return s[(slen / 2) - 1] + s[slen / 2];
    }
    else {
        return s[parseInt(slen / 2)];
    }
}

// Better Solution
// Stores s.length / 2 instead of just s.length because it is used more
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2)
        ? s.charAt(Math.floor(middle))
        : s.slice(middle - 1, middle + 1);
}