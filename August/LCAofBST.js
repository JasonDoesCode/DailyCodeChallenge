// 235. Lowest Common Ancestor of a Binary Search Tree

// Leetcode Link - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Problem Statement
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// Examples
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6

//My Solution
var lowestCommonAncestor = function(root, p, q) {
    let curr = root
    
    
    while (curr !== null){
        if (p.val > curr.val && q.val > curr.val){
            curr = curr.right
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left
        } else {
            return curr
        }
    }
};