// Exes & Ohs

// Problem Statement
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// My Solution
function XO(str) {

    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase()[i] == 'x') {
            xCount += 1;
        }

        if (str.toLowerCase()[i] == 'o') {
            oCount += 1;
        }
    }

    return xCount === oCount;
}

// Better Solution
// Makes use of the Match() function
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}