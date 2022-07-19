// Square Every Digit

// Code Wars Link - https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

// Problem Statement
// square every digit of a number and concatenate them.

// Example
// run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.


// My Solution
function squareDigits(num) {

    let myNum = num.toString();
    let numStr = "";

    for (let i = 0; i < myNum.length; i++) {
        numStr = numStr + Math.pow(parseInt(myNum[i]), 2).toString();
    }

    return parseInt(numStr);
}


// Better Solution
// Lot of solutions make use of the map() function, worth looking into/understanding
function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}