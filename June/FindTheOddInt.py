# Find The Odd Int

# Codewars Link - https://www.codewars.com/kata/54da5a58ea159efa38000836/python

# Problem Statement
# Given an array of integers, find the one that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time(which is odd).
# [0] should return 0, because it occurs 1 time(which is odd).
# [1, 1, 2] should return 2, because it occurs 1 time(which is odd).
# [0, 1, 0, 1, 0] should return 0, because it occurs 3 times(which is odd).
# [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).

# My Solution
# loop through seq as a set (to remove duplicates)
# use count to check how many times that int occurs in seq
# if it occurs an odd amount of times, return that item
def find_it(seq):
    for item in set(seq):
        if seq.count(item) % 2 != 0:
            return int(item)


# Better Solution
# Not required to make it into a set*
# Can remove the int() cast, and just return the item

# *will have to check if the trade off for creating a set and removing duplicates
# is worthwhile and reduces the total runtime of code
def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i
