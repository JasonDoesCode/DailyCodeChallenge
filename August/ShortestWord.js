// Shorest Word

// CodeWars Link - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript

// Problem Statement
// Simple, given a string of words, return the length of the shortest word(s).

// Example
// "This is an example sentence" -> 2

// My Solution
function findShort(s) {
    var sArr = s.split(" ");

    let minCharCount;

    for (let i = 0; i < sArr.length; i++) {
        if (i === 0) {
            minCharCount = sArr[i].length;
        }
        else {
            minCharCount = Math.min(minCharCount, sArr[i].length);
        }
    }

    return minCharCount;
}

// Better/Another Solution
// Not sure if better because it relies on map, but perhaps faster
function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}