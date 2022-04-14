# Shortest Word

# Codewars Link - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

# Problem Statement
# Given a string of words, return the length of the shortest word(s).

# Examples
# "This is a string" -> 1

# My Solution
def find_short(s):
    return len(min(s.split(), key=len))


# Other Solution
# Doesn't rely on .min(key=len)
# Would need to check runtimes to determine better solution
def find_short(s):
    return min(len(x) for x in s.split())
