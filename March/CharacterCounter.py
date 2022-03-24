# Character Counter

# CodeWars Link - https://www.codewars.com/kata/56786a687e9a88d1cf00005d

# Problem Statement:
# You are going to be given a word.
# Your job will be to make sure that each character in that word has the exact same number of occurrences.
# You will return true if it is valid, or false if it is not.

# Examples
# "abcabc" is a valid word because "a" appears twice, "b" appears twice, and "c" appears twice.
# "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!

from collections import Counter

# My Solution


def validate_word(word):

    # convert string to lowercase for comparison
    word = word.lower()

    # holds a unique character & the number of times that character appears in word
    dict = {}

    # iterates through the string counting every instance of a letter
    for char in word:
        if char in dict:
            dict[char] = dict[char] + 1
        if char not in dict:
            dict[char] = 1

    # grabs value stored in the first dict item
    firstValue = dict[list(dict.keys())[0]]

    # compares first item against every other item, if there is a difference, return False
    for char in dict:
        if firstValue != dict[char]:
            return False

    # Entire dict matches in value return True
    return True


# Better Solution (via other Users)
def validate_word(word):
    # convert word to lower cast
    # Use Counter library and count unique instance of every letter
    # convert to set to remove duplicates
    # if more than one value, duplicates existed, no match between unique instances
    return len(set(Counter(word.lower()).values())) == 1
