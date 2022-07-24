// Isograms

// Codewars Link - https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript

// Problem Statement
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Examples
// "Dermatoglyphics" --> true
// "aba" -- > false
// "moOse" -- > false(ignore letter case)

// My Solution
function isIsogram(str) {

    let myArr = str.toLowerCase().split('');
    let mySet = new Set(myArr);

    if (myArr.length === mySet.size) {
        return true;
    }

    return false;
}

// Better Solution
// Just compares the size of the set against the length of the string
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}