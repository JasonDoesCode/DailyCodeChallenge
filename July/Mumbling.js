// Mumbling

// CodeWars Link - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

// Problem Statement
// Create a function that creates a index repetition patterned string given a input string

// Example
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// My Solution
function accum(s) {
    let myArr = s.split('');

    for (let i = 0; i < myArr.length; i++) {
        myArr[i] = myArr[i].toUpperCase() + myArr[i].toLowerCase().repeat(i);
    }

    return myArr.join('-');
}