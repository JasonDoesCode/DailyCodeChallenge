# Highest and Lowest

# Codewars Link - https://www.codewars.com/kata/554b4ac871d6813a03000035

# Problem Statement
# you are given a string of space separated numbers, and have to return the highest and lowest number.

# Examples
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"

# Note, the input and output are both strings

# My Solution
# Learned how to utlize the split() function and cast values from a lengthy string
def high_and_low(numbers):

    numArray = [int(num_) for num_ in numbers.split(" ")]

    return str(max(numArray)) + " " + str(min(numArray))
