// Vowel Count

// Codewars Link - https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

// Problem Statement
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// My Solution
function getCount(str) {
    count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }
    return count;
}

// Better Solution
// Used REgeX, yet to learn looks benefical for text detection
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}