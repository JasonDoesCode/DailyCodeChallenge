// Descending Order

// Codewars Link - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

// Problem Statement
//  take any non-negative integer as an argument and return it with its digits in descending order.

// Example
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321 

// My Solution
// Convert to str -> reverse sort -> return as int/num
function descendingOrder(n) {
    return (parseInt(n.toString().split('').sort().reverse().join('')));
}