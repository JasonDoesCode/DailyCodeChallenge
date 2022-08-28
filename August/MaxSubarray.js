// 53. Maximum Subarray

// Leetcode Link - https://leetcode.com/problems/maximum-subarray/

// Problem Statement
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Examples
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Input: nums = [1]
// Output: 1

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23

// Solution
var maxSubArray = function (nums) {

    maxSub = nums[0]
    currSum = 0

    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0
        }

        currSum += nums[i]
        maxSub = Math.max(maxSub, currSum)
    }

    return maxSub

};
