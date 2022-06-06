# Create Cellphone Number

# Codewars - https://www.codewars.com/kata/525f50e3b73515a6db000b83/python

# Problem Statement
# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

# Examples
# create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"


# My Solution
# Convert list of ints into list of strings
# Join the list into a single string
# Call portions of the string and insert them into the format of a phone number
def create_phone_number(n):
    n = "".join([str(x) for x in n])
    return ("(" + n[0:3] + ")" + " " + n[3:6] + "-" + n[6:10])


# Better Solution
# Outline the format utlized using the format() function
# Input the provided string & return the string
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
