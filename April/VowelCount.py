# Vowel Count

# Codewars Link - https://www.codewars.com/kata/54ff3102c1bad923760001f3

# Problem Statement
# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.

# Examples
# getCount("aeiou") -> returns 5

# MySolution
def get_count(sentence):

    vowel_count = 0

    for char_ in sentence:
        print(char_)
        if char_ == "a" or char_ == "e" or char_ == "i" or char_ == "o" or char_ == "u":
            vowel_count = vowel_count + 1

    return vowel_count


# Better Solution
# Found a way to use the count function for more than 1 case at a time
# Solution is not great for retaining the occurances of each vowel
def getCount(inputStr):
    return sum(inputStr.count(char) for char in ['a', 'e', 'i', 'o', 'u'])
