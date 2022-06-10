# Array Diff

# Codewars Link - https://www.codewars.com/kata/523f5d21c841566fde000009/python

# Problem Statement
# It should remove all values from list a, which are present in list b keeping their order.

# Example
#array_diff([1,2],[1]) == [2]
#array_diff([1,2,2,2,3],[2]) == [1,3]

# My Solution
# Wrote a driver fuction that compares each item in the list from list b to items in list a
# Helper fuction removes all instances of the identifed item from the list a copy (list c)
# driver functions returns list c (the copied and edited list)
def remove_items(test_list, item):
    res = [i for i in test_list if i != item]
    return res


def array_diff(a, b):
    # your code here

    c = a

    if b in a:
        print("true")

    for num in b:
        for num2 in a:
            if num == num2:
                c = remove_items(c, num)

    return c


# Better Solution
# Doesn't need a helper function and uses some of the same logic
# for every item in list a, if it is not in list b, create a new list and return
def array_diff(a, b):
    return [x for x in a if x not in b]
