# Disemvowel Trolls

# CodeWars Link - https://www.codewars.com/kata/52fba66badcd10859f00097e

# Problem Statement
# Remove all of the vowels from the trolls' comments, neutralizing the threat.

# Example
# Input: "This website is for losers LOL!" -> Output: "Ths wbst s fr lsrs LL!"
# Note: y isn't considered a vowel for this post


# My Solution
# Iternate throgh comment -> if the current char matches a vowel, replace with space -> return comment
def disemvowel(comment):

    for char_ in comment[:]:
        if char_ in "aeiouAEIOU":
            comment = comment.replace(char_, '')

    return comment
