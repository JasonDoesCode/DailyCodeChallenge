// 206. Reverse Linked List

// Leetcode Link - https://leetcode.com/problems/reverse-linked-list/

// Iterative Solution
var reverseList = function (head) {
    let prev = null
    let curr = head

    while (curr !== null) {

        let temp = curr.next

        curr.next = prev
        prev = curr
        curr = temp

    }

    return prev
};