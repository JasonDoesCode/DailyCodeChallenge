// Who likes it?

// CodeWars Link - https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

// Problem Statement - Implement the function which takes an array containing the names of people that like an item.
// It must return the display text as shown

// Examples
// []-->  "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"


// My Solution
function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } else if (names.length === 1) {
        return names[0] + ' likes this'
    } else if (names.length === 2) {
        return names[0] + ' and ' + names[1] + ' like this'
    } else if (names.length === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    } else {
        return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
    }
}

// Better Solution
// Switch case makes for better readability, could also implement Template Literals for better string readability
function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}