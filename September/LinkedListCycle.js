// 141. Linked List Cycle

// Leetcode Link - https://leetcode.com/problems/linked-list-cycle/

// Problem Statement
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// Example
// Input: head = [3, 2, 0, -4], pos = 1
// Output: true

// Solution
var hasCycle = function (head) {

    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {

        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
            return true
        }

    }

    return false
};