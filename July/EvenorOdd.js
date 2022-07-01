// Even or Odd (JavaScript)

// CodeWars Link - https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Problem Statement
// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

// Example
// 5 -> Odd
// 6 -> Even

// My Solution
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even"
    }

    return "Odd"
}