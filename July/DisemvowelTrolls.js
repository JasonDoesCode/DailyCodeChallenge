// Disevowel Trolls

//CodeWars Link - https://www.codewars.com/kata/52fba66badcd10859f00097e

// Problem Statement
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


// My Solution
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}

// Better Solution
// uses gi which is case insensitive
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
}
