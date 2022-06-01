# Sum of the Two Lowest Ints

# Codewars Link - https://www.codewars.com/kata/558fc85d8fd1938afb000014/python

# Problem Statement
# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
# No floats or non-positive integers will be passed.

# Examples
# [19, 5, 42, 2, 77] -> 7
# [10, 343445353, 3453445, 3453545353453] -> 3453455

# My Solution
# Convert to set to remove duplicates
# Sort the set
# Return the first two numbers in the set added together
def sum_two_smallest_numbers(numbers):
    numbers = sorted(set(numbers))
    return numbers[0] + numbers[1]


# Better Solution
# Didn't need to convert to set (inputs never had duplicates)
# used Slice Notation to grab the first two items without assigning to variable
# used Sum() function to quickly add returned items from Sorted()
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])
