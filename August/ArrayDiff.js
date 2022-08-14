// Array Diff

// Codewars Link - https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

// Problem Statement
// implement a difference function, which subtracts one list from another and returns the result.

// Example
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My Solution
function arrayDiff(a, b) {
    return a.filter(item => {
        return !(b.includes(item))
    })
}