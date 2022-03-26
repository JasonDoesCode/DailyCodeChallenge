# Challenge - Does my number look big in this?
# Link - https://www.codewars.com/kata/5287e858c6b5a9678200083c

# A Narcissistic Number is a positive number which is the sum of its own digits,
# each raised to the power of the number of digits in a given base.

# Examples
# Take 153 (3 digits)
# 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 [True]

# 1652 (4 digits)
# 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 [False]

# First 6 Kyu question! :)

# My Solution
def narcissistic(value):

    value = str(value)
    valueLen = len(value)
    sum = 0

    for num in value:
        sum = (sum + int(num)**valueLen)

    return sum == int(value)
