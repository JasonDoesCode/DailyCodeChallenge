// String Ends With?

// CodeWars Link - https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/javascript

// Problem Statement
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

// Examples
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My Solution
function solution(str, ending) {
    return str.substring(str.length - ending.length) === ending;
}

// Better Solution
function solution(str, ending) {
    return str.endsWith(ending);
}

// Another Better Solution
function solution(str, ending) {
    return str.substr(-ending.length) === ending;
}