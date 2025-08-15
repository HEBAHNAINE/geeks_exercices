# ------ Exercise 1
manufacturers_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
print(manufacturers_str)
my_list = [m.strip() for m in manufacturers_str.split(",")]
print(my_list)
print(f"Number of manufacturers: {len(my_list)}")
descending_list = sorted(my_list, reverse=True)
count_with_o = 0
count_without_i = 0

for m in my_list:
    if 'o' in m.lower():
        count_with_o += 1
    if 'i' not in m.lower():
        count_without_i += 1

print(f"Number of manufacturers with 'o': {count_with_o}")
print(f"Number of manufacturers without 'i': {count_without_i}")

# ------ Exercise 2
def get_full_name(first_name, last_name, middle_name=""):
    if middle_name: 
        full_name = f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else: 
        full_name = f"{first_name.capitalize()} {last_name.capitalize()}"
    return full_name
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee")) 
print(get_full_name(first_name="bruce", last_name="lee"))
# ------ Exercise 3
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
}
def english_to_morse(text):
    text = text.upper()
    morse_text = ' '.join(MORSE_CODE_DICT.get(char, '') for char in text)
    return morse_text

def morse_to_english(morse_code):
    REVERSE_DICT = {v: k for k, v in MORSE_CODE_DICT.items()}
    words = morse_code.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(REVERSE_DICT.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)
english_text = "Hello World"
morse = english_to_morse(english_text)
print("English to Morse:", morse)

decoded = morse_to_english(morse)
print("Morse to English:", decoded)
# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
