# Challenge - Exes and Ohs
# https://www.codewars.com/kata/55908aad6620c066bc00002a

# Check to see if a string has the same amount of 'x's and 'o's.
# The method must return a boolean and be case insensitive.
# The string can contain any char.

# Examples
# XO("ooxx") => true
# XO("xooxx") = > false
# XO("ooxXm") = > true


# My Solution
from collections import Counter


def xo(s):

    xoDict = Counter(s)

    xCounter = 0
    oCounter = 0

    for char in xoDict:
        if char == 'x' or char == 'X':
            xCounter = xCounter + xoDict[char]
        elif char == 'o' or char == 'O':
            oCounter = oCounter + xoDict[char]

    return xCounter == oCounter


# Better Solution
# Learned about count() function.
# Handy for counting the instances of a specfic char within a string
def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')
