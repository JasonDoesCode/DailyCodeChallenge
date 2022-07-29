// List Filtering

// CodeWars Link - 

// Problem Statement

// Example

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