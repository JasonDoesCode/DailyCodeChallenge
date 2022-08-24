// 226. Invert Binary Tree

// Leetcode Link - https://leetcode.com/problems/invert-binary-tree/

// Problem Statement
// Given the root of a binary tree, invert the tree, and return its root.

// Example (Problem has visual images that better depict the inversion)
// Input: root = [4,2,7,1,3,6,9]
// Output: [4, 7, 2, 9, 6, 3, 1]

// Input: root = [2, 1, 3]
// Output: [2, 3, 1]

// Input: root = []
// Output: []

var invertTree = function (root) {

    if (root === null) {
        return null
    }

    temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root

};