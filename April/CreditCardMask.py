# Credit Card Mask

# CodeWars Link - https://www.codewars.com/kata/5412509bd436bd33920011bc

# Problem Statement
# Your task is to write a function maskify, which changes all but the last four characters into '#'

# Examples
# "4556364607935616" --> "############5616"
#     "64607935616" -->      "#######5616"
#               "1" -->                "1"
#                "" -->                 ""

# MySolution
# Check if the string is more than 4 chars
# If so, create a new censored string that is 4 chars less than cc string
# Concatenate the last 4 chars from the cc string onto the censored string
# return the concatenated string
# If not > 4, then return the string as is
def maskify(cc):

    ccLen = len(cc)

    if ccLen > 4:
        mask = "#" * (ccLen - 4)
        return (mask + cc[-4:])
    else:
        return (cc)
