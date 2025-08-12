# ------ Exercise 1
print("Hello world\nHello world\nHello world\nHello world")
# ------ Exercise 2
print((99 ** 3) * 8)
# ------ Exercise 3
my_name = "Hiba"  

user_name = input("Quel est ton prénom ? ")

if user_name == my_name:
    print("Incroyable ! On a le même nom ! Les grands esprits se rencontrent.")
else:
    print(f"Ohhh... {user_name}? Pas mal, mais {my_name} c'est quand même plus stylé hhhh.")

# ------ Exercise 4
height = int(input("Quelle est ta taille en cm ? "))

if height > 145:
    print("Tu es assez grand pour faire le manège")
else:
    print("Il faut encore grandir un peu avant de monter")

# ------ Exercise 5
my_fav_numbers={2,6,9,11}
my_fav_numbers.add(42)
my_fav_numbers.add(99)
print (my_fav_numbers)
my_fav_numbers.remove(max(my_fav_numbers)) 
print(f"apres suppression,{my_fav_numbers}")
friend_fav_numbers = {5, 7, 11}
print("Nombres préférés de mon ami :", friend_fav_numbers)
our_fav_numbers = (my_fav_numbers | friend_fav_numbers)
print("Nos nombres préférés :", our_fav_numbers)

# ------ Exercise 6
#no tuple in Python are immutable , you can not directly add or remove elements from it.
# ------ Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
apple_count = basket.count("Apples")
print("Nombre de 'Apples' dans le panier :", apple_count)
basket.clear()
print(basket)
# ------ Exercise 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
print("Sorry, we're out of pastrami today.")
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    finished_sandwiches = []
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"i made your {current_sandwich}")
    finished_sandwiches.append(current_sandwich)
    