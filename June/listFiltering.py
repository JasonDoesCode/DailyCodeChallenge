# List Filtering

# CodeWars link - https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/python

# Problem Statement
# In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

# Examples
# filter_list([1,2,'a','b']) == [1,2]
# filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
# filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

# My Solution
# Create empty list (newList)
# Increment through existing list looking for where value is not a string
# Append that item to newList
# Return newList
def filter_list(l):
    newList = []

    for item in l:
        if type(item) is str:
            pass
        else:
            newList.append(item)

    return newList


# My Improved Solution
# Removed uneccessary else statement
def filter_list(l):
    newList = []

    for item in l:
        if type(item) is not str:
            newList.append(item)

    return newList


# Better Solution
# makes use of the isinstance() fucntion
# doesn't need to create a temp variable
def filter_list(l):
    return [i for i in l if not isinstance(i, str)]
