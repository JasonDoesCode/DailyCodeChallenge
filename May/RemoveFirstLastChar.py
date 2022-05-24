# Remove First and Last Character

# CodeWars Link - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/python

# Problem Statement
# Your goal is to create a function that removes the first and last characters of a string. 
# You're given one parameter, the original string. 
# You don't have to worry with strings with less than two characters.

#Example:
# "input" -> "npu"

# My Solution
def remove_char(s):
    return ''.join(list(s)[1:-1])


# Better Solution
# Dont need to convert to a list. Use Splice operator directly on string
def remove_char(s):
    return s[1: -1]
