// 409. Longest Palindrome

// LeetCode Link - https://leetcode.com/problems/longest-palindrome/

var longestPalindrome = function (s) {

    const myHash = {}

    for (let i = 0; i < s.length; i++) {
        if (myHash.hasOwnProperty(s[i])) {
            myHash[s[i]] += 1
        } else {
            myHash[s[i]] = 1
        }
    }

    let result = 0

    for (var key in myHash) {
        result += Math.floor(myHash[key] / 2) * 2 // if a number is odd, we subtract 1

        // if we have a 'perfect' palindrome and the current char count has a extra, it can be added to the middle
        // once the char has been added to the middle it is no longer 'perfect'
        // 'perfect' palindrome is when each char appears more than twice (no middle char)
        if (result % 2 == 0 && myHash[key] % 2 == 1) {
            result += 1
        }
    }

    return result

};