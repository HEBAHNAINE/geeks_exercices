# ------ Exercise 1
from pickle import APPEND
from typing import Self


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
CAT1=Cat("mew",3)
CAT2=Cat("pew",2)
CAT3=Cat("massila",1)
print(CAT1.name, CAT1.age)  # Whiskers 2
print(CAT2.name, CAT2.age) 
print(CAT3.name, CAT3.age)
def oldest_cat(cats):
    if not cats:
        return None
    oldest = cats[0]
    for cat in cats[1:]:
        if cat.age > oldest.age:
            oldest = cat
    return oldest
cats_list = [CAT1, CAT2, CAT3] 
oldest = oldest_cat(cats_list)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
# ------ Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
def bark(slef):
    print(f"{slef.name} goes woof!")
def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")
dog=Dog("rex",50)
print(f"His dog’s name is {dog.name} and his height {dog.height}")
dog.bark()
dog.jump()
sarahs_dog=Dog("Teacup",20)
print(f"His dog’s name is {sarahs_dog.name} and his height {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()
if dog.height > sarahs_dog.height:
    print(f"The bigger dog is {dog.name}")
elif sarahs_dog.height > dog.height:
    print(f"The bigger dog is {sarahs_dog.name}")
else:
    print("Both dogs are the same height!")
# ------ Exercise 3
class Song :
    def __init__(self,lyrics) :
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
lana_song =Song([
    "I've got that summertime, summertime sadness",
    "I just wanted you to know",
    "I know you will, I know you will"
])
lana_song.sing_me_a_song()
    
# ------ Exercise 4
class Zoo:
    def __init__(self,zoo_name):
        self.name=zoo_name
        self.animals=[]
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")
    def sort_animals(self):
        grouped = {}
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter in grouped:
                if isinstance(grouped[first_letter], list):
                    grouped[first_letter].append(animal)
                else:
                    grouped[first_letter] = [grouped[first_letter], animal]
            else:
                grouped[first_letter] = animal
        return grouped
    def get_groups(self):
     animalS= self.sort_animals()
     for letter, animals in animalS.items():
        if isinstance(animals, list):
            print(f"{letter}: {', '.join(animals)}")
        else:
            print(f"{letter}: {animals}")
new_york_zoo=Zoo("crocodile")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Tiger")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
print("All animals in the zoo:")
new_york_zoo.get_animals()
new_york_zoo.sell_animal("Tiger")
new_york_zoo.sell_animal("Wolf") 
grouped_animals = new_york_zoo.sort_animals()
print("\nGrouped animals (dictionary):")
print(grouped_animals)
print("\nAnimals by group:")
new_york_zoo.get_groups()  
         
# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
