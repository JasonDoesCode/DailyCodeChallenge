# Even Or Odd

# CodeWars Link - https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/python

# Problem Statement
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# Example
# 3 -> Odd
# 60 -> Even


# My Solution
# Divide the number by 2, if there is a remainder return even
# Else Return Odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


# Other Solution
# Same logic
# One Line Solution, however subjectivly less readable
def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'
