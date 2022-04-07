# Desending Order

# CodeWars Link - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/python

# Problem Statement
# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
# Essentially, rearrange the digits to create the highest possible number.

# Example
# input:42145 -> output:54421
# input:145263 -> output:654321
# input:123456789 -> output:987654321

# MySolution
# Learned that the sorted() fuction has a parameter to reverse a sort
def descending_order(num):
    return int("".join(sorted(str(num), reverse=True)))
