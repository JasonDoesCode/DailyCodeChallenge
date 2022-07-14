// Highest and Lowest

// Codewars Link - https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

// Problem Statement
// you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// My Solution
function highAndLow(numbers) {

    let myList = numbers.split(" ");

    for (let i = 0; i < myList.length; i++) {
        myList[i] = Number(myList[i])
    }

    let maxNum = Math.max.apply(null, myList);
    let minNum = Math.min.apply(null, myList);

    return (maxNum + " " + minNum);
}

// Better Solution
// Used Map Function to get the result of converting list into strings to numbers
// directly returns 
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}