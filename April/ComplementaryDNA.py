# Complementary DNA

# CodeWars Link - https://www.codewars.com/kata/554e4a2f232cdd87d9000038

# Problem Statement
# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
# Your function receives one side of the DNA (string, except for Haskell);$
# you need to return the other complementary side.

import string


# My Solution
def DNA_strand(dna):

    dnaList = []

    for char_ in dna:
        if char_ == "A":
            dnaList.append("T")
        if char_ == "T":
            dnaList.append("A")
        if char_ == "G":
            dnaList.append("C")
        if char_ == "C":
            dnaList.append("G")

    return "".join(dnaList)


# Better Solution
# Based on comments, it is a better practice to create a lookup table via dictionary
# string.maketrans() creates a matching dictionary based on two strings or two values
# string.translate() will take the string and translate it using the provided dictionary
def DNA_strand(dna):
    return dna.translate(string.maketrans("ATCG", "TAGC"))
