# ------ Exercise 1
#1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))
print(my_dict)

# ------ Exercise 2
family = {}
while True:
 name =input("Entrez le nom d'un membre de la famille :(ou 'stop' pour finir) ")
 if name =="stop":
    break
 age = int(input(f"Entrez l'âge de {name} : "))
 family[name] = age

total =0
for name,age in family.items():
    if age<3:
     print("the ticket is free")
     price=0
    elif age>3 and age<12 :
     print("the ticket is $10")
     price=10
    elif age>12:
     print("the ticket is $15")
     price=15
    print(f"{name.capitalize()} doit payer {price}$")
    total += price
    print ("the family’s total cost for the movies {total}")
    


# ------ Exercise 3
brand ={
    "name":"Zara",
    "creation_date": 1975 ,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes":["men", "women", "children","home"],
    "international_competitors":["Gap","H&M","Benetton"],
    "number_stores":7000,
    "major_color":{
        "France":"blue", 
        "Spain":"red", 
        "US":["pink","green"]
    },
}
brand["number_stores"]=2
print(brand)
client = brand["type_of_clothes"]
print(f"Zara's clients are: {client}.")
brand["country_creation"]="spain"
print(brand)
if "international_competitors" in brand:
     brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])
del brand[ "creation_date"]
print(brand)
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print (list(brand.keys()))
more_on_zara ={
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand)
print(brand["number_stores"])


# ------ Exercise 4
def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")
    describe_city("Casablanca", "Morocco")
    describe_city("fes")

# ------ Exercise 5
import random

def guess_number(user_number):
    if not 1 <= user_number <= 100:
        print("Please enter a number between 1 and 100.")
        return

    random_number = random.randint(1, 100)
    if user_number == random_number:
        print(f"Success! You guessed the number {random_number}.")
    else:
        print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")

    
# ------ Exercise 6
def make_shirt(size, message):
    print(f"The shirt size is {size} and the text is: '{message}'.")
def make_shirt(size="M", message="I love Python"):
    print(f"The shirt size is {size} and the text is: '{message}'.")
make_shirt()
make_shirt("2XL")
make_shirt("M", "Keep calm and code Python")

# ------ Exercise 7
import random
def get_random_temp():
     random_number = random.randint(-10,40)
     return random_number
for _ in range(5):
    print(get_random_temp())
def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp<0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp>=0 and temp<=16:
        print("Quite chilly! Don’t forget your coat”")
    elif 16 <= temp <= 23:
        print("The weather is mild and pleasant.")
    elif 24 <= temp <= 32:
        print("It's warm, perfect for light clothes.")
    elif 32 <= temp <= 40:
        print("It's really hot! Stay hydrated!")
def get_random_temp(season):
    if season.lower() == "winter":
        return random.randint(-10, 16)
    elif season.lower() == "spring":
        return random.randint(5, 23)
    elif season.lower() == "summer":
        return random.randint(20, 40)
    elif season.lower() == "autumn":
        return random.randint(10, 24)
def main():
    season = input("Enter the season (winter, spring, summer, autumn/fall): ").strip().lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp <= 23:
        print("The weather is mild and pleasant.")
    elif 24 <= temp <= 32:
        print("It's warm, perfect for light clothes.")
    elif 32 <= temp <= 40:
        print("It's really hot! Stay hydrated!")
main()
# ------ Exercise 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
def star_wars_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            print("Correct!\n")
            correct += 1
        else:
            print(f"Wrong! The correct answer is {item['answer']}.\n")
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })
    print("Quiz finished!")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")
    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for wrong in wrong_answers:
            print(f"- {wrong['question']}")
            print(f"  Your answer: {wrong['your_answer']}")
            print(f"  Correct answer: {wrong['correct_answer']}\n")
star_wars_quiz()