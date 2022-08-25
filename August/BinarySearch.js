// 704. Binary Search

// Leetcode Link - https://leetcode.com/problems/binary-search/

// Problem Statement
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Examples
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1

// Solution
var search = function (nums, target) {

    let left = 0
    let right = (nums.length - 1)
    let mid = null

    while (left <= right) {

        mid = Math.floor((left + right) / 2)
        console.log(mid)

        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }

    }

    return (-1)

};