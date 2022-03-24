# Two To One

# CodeWars Link - https://www.codewars.com/kata/5656b6906de340bd1b0000ac

# Problem Statement:
# Take 2 strings s1 and s2 including only letters from ato z.
# Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# My Solution
def longest(a1, a2):
    # Solution High Level Description:
    # Combine strings -> Remove duplicates -> Sort string -> return string

    return("".join(sorted(set(a1+a2))))
