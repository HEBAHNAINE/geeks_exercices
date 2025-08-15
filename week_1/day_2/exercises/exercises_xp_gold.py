# ------ Exercise 1
from tabnanny import NannyNag
from unittest import result


birthdays = {
    "heba": "2004/01/25",
    "Brahim": "2000/11/23",
    "aya": "2003/07/08",
    "hanan": "2004/01/28",
    "ali": "1989/09/30"
}
print("Welcome!")
print("You can look up the birthdays of the people in the list!")
name=input("Please enter a person's name: ")
birthday = birthdays.get(name)
if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, {name} is not in the list.")
# ------ Exercise 2
print("Here are the people in the list:")
for person in birthdays:
    print("- " + person)
name = input("Please enter a person's name: ").strip()
birthday = birthdays.get(name)
if birthday:
    print(f"{name}'s birthday is on {birthday}.")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
# ------ Exercise 3
def fct(n):
   x_str = str(x)
   xx = int(x_str * 2)
   xxx = int(x_str * 3)
   xxxx = int(x_str * 4)
   num=x_str+xx+xxx+xxxx
   return num
# ------ Exercise 4
import random

def throw_dice():
    return random.randint(1, 6)
def throw_until_doubles():
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        print(f"Throw {count}: ({die1}, {die2})")
        if die1 == die2: 
            break
    return count
def main():
    results = [] 
    for i in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results) 
    average_throws = total_throws / len(results)  
    print(f"Total number of throws needed to reach 100 doubles: {total_throws}")
    print(f"Average number of throws per double: {average_throws:.2f}")

main()

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
