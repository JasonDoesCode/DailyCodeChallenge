# Who likes it?

# CodeWars Link - https://www.codewars.com/kata/5266876b8f4bf2da9b000362/python
# Kyu 6! :)

# Problem Statement
# You probably know the "like" system from Facebook and other pages.
# People can "like" blog posts, pictures or other items.
# We want to create the text that should be displayed next to such an item.

# Examples
# []                                -->  "no one likes this"
# ["Peter"]                         -->  "Peter likes this"
# ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

# My Solution
def likes(names):

    namesLen = len(names)

    if namesLen == 0:
        return 'no one likes this'
    if namesLen == 1:
        return names[0] + ' likes this'
    if namesLen == 2:
        return names[0] + ' and ' + names[1] + ' like this'
    if namesLen == 3:
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    if namesLen > 3:
        return names[0] + ', ' + names[1] + ' and ' + str(namesLen - 2) + ' others like this'


# Better Solution
# Way better readability and formatting is performed within the string
# Doesn't rely on concatenations for formatting
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return "%s likes this" % names[0]
    elif len(names) == 2:
        return "%s and %s like this" % (names[0], names[1])
    elif len(names) == 3:
        return "%s, %s and %s like this" % (names[0], names[1], names[2])
    else:
        return "%s, %s and %s others like this" % (names[0], names[1], len(names)-2)
