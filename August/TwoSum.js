// Two Sum

// Leetcode Link - https://leetcode.com/problems/two-sum/

// Problem Statement
// The infamous Two Sum >:)
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


// Use a hashmap to keep track of the numbers and the related index
// Iterate through the array
// Every iteration, check if the hashmap contains target - current number
// If yes, return the stored index from the target - current number, and index of the current number
// If no, then add the current number and its index to the hashmap


var twoSum = function (nums, target) {

    const myHash = {}

    for (let i = 0; i < nums.length; i++) {

        inverse = target - nums[i]

        if (myHash.hasOwnProperty(inverse)) {
            return [myHash[inverse], i]
        } else {
            myHash[nums[i]] = i
        }

    }

    return ('ERROR')

};
