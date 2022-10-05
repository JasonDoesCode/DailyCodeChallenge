// 169. Majority Element
// Leetcode Link - https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {

    const counts = {}

    const majority = Math.floor(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
        if (counts.hasOwnProperty(nums[i])) {
            counts[nums[i]] += 1
        } else {
            counts[nums[i]] = 1
        }
    }


    for (const count in counts) {

        if (counts[count] > majority) {
            return count
        }
    }


};