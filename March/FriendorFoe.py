# Challenge - Friend or Foe
# Link - https://www.codewars.com/kata/55b42574ff091733d900002f

# Make a program that filters a list of strings and returns a list with only your friends name in it.
# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
# Otherwise, you can be sure they are not...

# Examples
# Input = ["Ryan", "Kieran", "Jason", "Yous"]
# Output = ["Ryan", "Yous"]

# My Solution
# Learned about deleting items inside a for loop currently being iterated through is not a good practice
# Make sure to use [:] to create a shallow copy so iteration is happening with a copy not the original
def friend(x):
    for name in x[:]:
        if name.isalpha() != True or len(name) != 4:
            x.remove(name)

    return x
