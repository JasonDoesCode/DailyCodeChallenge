// List Filtering

// CodeWars Link - https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// Problem Statement
// In this kata you will create a function that takes a list of non - negative integers and strings 
// and returns a new list with the strings filtered out.

// Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

// My Solution
function filter_list(l) {
    let numList = [];

    for (let i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i])) {
            numList.push(l[i]);
        }
    }

    return numList;
}

// Better Solution
// Filter function can be passed another function as a critera to filter out values from a list
function filter_list(l) {
    return l.filter(Number.isInteger);
}

// Understanding Filter Function
// Expected output = ["Accept", "Accept"]
let myList = ["Ignore", "Accept", "Ignore", "Accept"];

console.log(myList.filter(acceptOnly));


function acceptOnly(myString) {
    return myString === "Accept";
}