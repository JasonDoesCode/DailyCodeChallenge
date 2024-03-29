// 21. Merge Two Sorted Lists

// Leetcode Link - https://leetcode.com/problems/merge-two-sorted-lists/

// Problem Statement
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Examples
// Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// Solution
var mergeTwoLists = function (list1, list2) {

    dummy = new ListNode()
    tail = dummy

    while (list1 !== null && list2 !== null) {

        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }

        tail = tail.next
    }

    if (list1 !== null) {
        tail.next = list1
    } else if (list2 !== null) {
        tail.next = list2
    }

    return dummy.next

};