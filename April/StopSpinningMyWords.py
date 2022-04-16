# Stop Spinning My Words (A.K.A Stop gninnipS My sdroW)

# Codewars Link - https://www.codewars.com/kata/5264d2b162488dc400000001

# Problem Statement
# Write a function that takes in a string of one or more words, and returns the same string,
# but with all five or more letter words reversed(Just like the name of this Kata).
# Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# Examples
# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
# spinWords( "This is a test") => returns "This is a test"
# spinWords( "This is another test" )=> returns "This is rehtona test"

# My Solution
# Split sentence into a list of words
# Check each word to see if it has a length of more than 5
# If it does replace the word, with the reversed word
def spin_words(sentence):

    myList = sentence.split()

    for i in range(len(myList)):
        if len(myList[i]) >= 5:
            myList[i] = myList[i][::-1]

    return " ".join(myList)
