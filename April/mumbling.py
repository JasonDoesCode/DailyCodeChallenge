# Mumbling

# CodeWars Link - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

# Problem Statement
# You are given a string, return the a string with each index of the original string
# captailized, followed by lowercase of that index, with the amount depending on the index

# Examples
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"


# My Solution
# learned strings can be filled with the same value by using *int
def accum(s):

    myList = []
    counter = 0

    for item in s:
        myList.append(item.upper() + item.lower()*counter)
        counter += 1

    return "-".join(myList)


# Better Solution
# learned about this easy syantax for a single line of a for loop
# if the for loop repeats only one line, consider using this sytanx
def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))
