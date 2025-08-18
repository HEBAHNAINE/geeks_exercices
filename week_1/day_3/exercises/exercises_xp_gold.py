# ------ Exercise 1
import math
class Circle:
      def __init__(self, radius=1.0):
        self.radius = radius
      def perimeter(self):
        return 2 * math.pi * self.radius

      def area(self):
        return math.pi * self.radius ** 2
      def definition(self):
        print("A circle is the set of all points in a plane that are at a given distance (radius) from a fixed point (the center).")
# ------ Exercise 2
class MyList:
    def __init__(self,letters):
        self.letters=letters
    def get_reversed(self):
        return list(reversed(self.letters))
    def get_sorted(self):
        return sorted(self.letters) 
    
# ------ Exercise 3
class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten": True},
        ]

    def add_item(self, name, price, spice, gluten):  
        """Add a new dish to the menu"""
        new_dish = {
            "name": name,
            "price": price,
            "spice_level": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice_level"] = spice
                dish["gluten"] = gluten
                print(f"Dish '{name}' has been updated.")
                return
        print(f"Dish '{name}' is not in the menu.")
    def remove_item(self, name):
        for i, dish in enumerate(self.menu):
            if dish["name"].lower() == name.lower():
                del self.menu[i]
                print(f"Dish '{name}' has been removed. Updated menu:")
                print(self.menu)
                return
        print(f"Dish '{name}' is not in the menu.")

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
