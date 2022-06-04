# Sum of Numbers

# Codewars Link - https://www.codewars.com/kata/55f2b110f61eb01779000053/python

# Problem Statement
# Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
# If the two numbers are equal return a or b.
# Note: a and b are not ordered!

# Examples
# (1, 0) --> 1 (1 + 0 = 1)
# (1, 2) - -> 3 (1 + 2=3)
# (0, 1) - -> 1 (0 + 1=1)
# (1, 1) - -> 1 (1 since both are same)
# (-1, 0) - -> -1 (-1 + 0=-1)
# (-1, 2) - -> 2 (-1 + 0 + 1 + 2=2)


# My Solution
# Get range of numbers between the min and max of the two numbers
# ensure to add one to max because range is not inclusive of max value
# convert the range to a list using list() fucntion
# use sum() function
# return the sum
def get_sum(a, b):
    return sum(list(range(min(a, b), max(a, b)+1)))


# My Improved Solution
# conversion to list not needed, sum works on range()
def get_sum(a, b):
    return sum(range(min(a, b), max(a, b) + 1))
