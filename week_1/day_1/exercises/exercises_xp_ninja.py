# ------ Exercise 1
#>>> 3 <= 3 < 9
#true
#>>> 3 == 3 == 3
#TRUE
#>>> bool(0)
#false
#>>> bool(5 == "5")
#false
#>>> bool(4 == 4) == bool("4" == "4")
#true
#>>> bool(bool(None))
#false
#x = (1 == True)
#true
#y = (1 == False)
#false
#a = True + 4
#5
#b = False + 10
#10
#print("x is", x)
#x is true
#print("y is", y)
#y is false
#print("a:", a)
#a:5
#print("b:", b)
#b:10
# ------ Exercise 2

while True:
    sentence = input("Enter the longest sentence you can without the character 'A': ")
    if 'A' in sentence:
        print("Your sentence contains the character 'A'. Please try again.")
        break
    else:
        print("Great! Your sentence does not contain 'A'.")

# ------ Exercise 3
paragraph = """Artificial intelligence is transforming the world. 
It is used in healthcare, education, and many other fields. 
People are learning how to use it effectively."""
num_characters = len(paragraph)
import re
sentences = re.split(r'[.!?]+', paragraph)
sentences = [s for s in sentences if s.strip() != ""]
num_sentences = len(sentences)
words = paragraph.split()
num_words = len(words)
unique_words = set(word.lower().strip(".,!?") for word in words)
num_unique_words = len(unique_words)
print(f"Number of characters: {num_characters}")
print(f"Number of sentences: {num_sentences}")
print(f"Number of words: {num_words}")
print(f"Number of unique words: {num_unique_words}")


# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
