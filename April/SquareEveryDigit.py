# Square Every Digit

# CodeWars Link - https://www.codewars.com/kata/546e2562b03326a88e000020

# Problem Statement
# Square every digit of a number

# Example
# input: 9119 -> output: 811181

# MySolution
def square_digits(num):

    squareString = ""

    for num_ in str(num):
        squareString = squareString + str(int(num_)**2)

    return(int(squareString))
