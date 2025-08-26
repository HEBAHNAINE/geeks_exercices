# ------ Exercise 1
#1
month = int(input("Entrez un mois (1 à 12) : "))
if 1 <= month <= 12:
    print(f"Vous avez choisi le mois numéro {month}.")
else:
    print("Mois invalide. Veuillez entrer un nombre entre 1 et 12.")
#2
if month>=3 and month<=5:
     print("Spring")
elif month>=6 and month<=8:
    print("summer")
elif month>=9 and month<=11:
    print("Autumn")
elif month>=12 and month<=2:
    print("Winter")   
     
# ------ Exercise 2
#1
for number in range(1, 21):
    print(number)
#2
numbers = range(1, 21) 
for index, value in enumerate(numbers):
    if index % 2 == 0:
        print(value)

# ------ Exercise 3
while name:="Hiba" :
    print 
my_name = "Hiba" 
while True:
    name = input("Entrez votre nom : ")
    if name == my_name:
        print("Bonjour, nous avons le même nom !")
        break 
    else:
        print("Ce n'est pas mon nom, essayez encore.")

# ------ Exercise 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Entrez votre nom : ")
if user_name in names:
    index = names.index(user_name)
    print(f"Le nom '{user_name}' se trouve à l'index {index}.")
else:
    print(f"Le nom '{user_name}' n'est pas dans la liste.")

# ------ Exercise 5
numbers=[]
for i in range(1,4):
 num = float(input(f"Entrez le {i}ème nombre : "))
 numbers.append(num)
 #2
 greatest = numbers[0] 
for num in numbers:
    if num > greatest:
        greatest = num
print(f"The greatest number is:{greatest}")

# ------ Exercise 6
import random
random_number = random.randint(1, 9)
user_number = int(input("Entrez un nombre entre 1 et 9 : "))
print(f"Votre nombre : {user_number}")
random_number = random.randint(1, 9)
print(f"Votre nombre : {random_number}")
if user_number==random_number:
    print("Winner")
else:
    print("Better luck next time")
# ------ Exercise 7

# ------ Exercise 8