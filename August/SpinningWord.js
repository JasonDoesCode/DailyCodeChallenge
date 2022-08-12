//Stop Spinning my Words!

//CodeWars Link - https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

//Problem Statement
// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed(Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Examples
// spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
// spinWords("This is a test") => returns "This is a test"
// spinWords("This is another test")=> returns "This is rehtona test"

// My Solution
function spinWords(string) {

    strArr = string.split(" ")

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            strArr[i] = strArr[i].split("").reverse().join("")
        }
    }

    return strArr.join(" ")

}

// Another solution
//Not that much better from a time complexity standpoint, however utlized map() which is a neater solution
function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
