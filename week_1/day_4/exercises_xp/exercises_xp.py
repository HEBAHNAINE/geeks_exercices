# ------ Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    pass
all_cats =[]
bengal= Bengal("simba",3)
chartreux=Chartreux("loli",2)
siamese=Siamese("lena",4)
all_cats.append(bengal)
all_cats.append(chartreux)
all_cats.append(siamese)
sara_pets = Pets(all_cats)
sara_pets.walk()
# ------ Exercise 2
class Dog:
    def __init__(self,name,age,weight):
        self.name=name
        self.age=age
        self.weight=weight
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return f" the dogs running speed {self.weight/self.age*10}"
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif my_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return "It's a draw!"
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Max", 4, 25)
dog3 = Dog("Buddy", 6, 30)
dogs = [dog1, dog2, dog3]

for dog in dogs:
    print(dog.bark())
    print(f"{dog.name}'s run speed: {dog.run_speed()}")

print("\n--- Fights ---")
print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))
# ------ Exercise 3
#from dog import Dog
from pickle import NONE
import random
class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        print(self.bark())
        self.trained = True
    def play(self, *dog_names):
        all_dogs = [self.name] + [dog.name for dog in dog_names]
        print(f"{', '.join(all_dogs)} all play together")
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and refuses to do a trick.")
    
# ------ Exercise 4
class Family:
    def __init__(self, last_name, members=None):
        if members is None:
            members = []
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congrats {self.last_name} family! A new child was born: {kwargs['name']}")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False

    def family_presentation(self):
        print(f"\nFamily {self.last_name}:")
        for member in self.members:
            print(f"{member['name']} - age: {member['age']}, gender: {member['gender']}, is_child: {member['is_child']}")

members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
my_family = Family("Johnson", members)
my_family.family_presentation()
my_family.born(name="Tom", age=2, gender="Male", is_child=True)
print(my_family.is_18("Michael"))
    
# ------ Exercise 5
class TheIncredibles(Family):
    def __init__(self, last_name, members=None):
        super().__init__(last_name, members)
    def family_presentation(self):
        print(f"\nThe Incredibles Family {self.last_name}:")
        for member in self.members:
            print(f"{member['name']} aka {member['incredible_name']} - "
                  f"age: {member['age']}, gender: {member['gender']}, "
                  f"is_child: {member['is_child']}, power: {member['power']}")
    def use_power(self, name):
        # Cherche le membre par nom
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']} uses their power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old!")
                return
        raise Exception(f"No family member found with the name {name}")
    def incredible_presentation(self):
        print("\nHere is our powerful family:")
        super().family_presentation()
members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredible_family = TheIncredibles("Incredibles", members)
incredible_family.incredible_presentation()
incredible_family.use_power("Michael")
incredible_family.use_power("Sarah")


# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
