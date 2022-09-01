// Balanced Binary Tree

// Leetcode Link - https://leetcode.com/problems/balanced-binary-tree/

// Problem Statement
// Given a binary tree, determine if it is height - balanced.

// Example
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Solution
var isBalanced = function (root) {

    function dfs(root) {

        if (root === null) {
            return [true, 0]
        }

        let right = dfs(root.right)
        let left = dfs(root.left)

        let balanced = (right[0] && left[0] && Math.abs(right[1] - left[1]) <= 1)

        return [balanced, (1 + Math.max(right[1], left[1]))]
    }

    return dfs(root)[0]

};