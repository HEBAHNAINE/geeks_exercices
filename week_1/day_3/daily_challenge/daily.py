# step1
class Farm:
#step 2
    def __init__(self,farm_name) :
        self.name=farm_name
        self.animals={}
    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count 
        else:
            self.animals[animal_type] = count
    def get_info(self):
        info = f"Farm name: {self.name}\nAnimals:\n"
        # Format animal names and counts in columns
        for animal, count in self.animals.items():
            info += f"  {animal} : {count}\n"
        info += "E-I-E-I-0!"
        return info
my_farm = Farm("sunny farm")
my_farm.add_animal("cow", 3)
my_farm.add_animal("pig", 2)
my_farm.add_animal("chicken", 5)
my_farm.add_animal("cow", 2)
print(my_farm.get_info())
   
def get_animal_types(self):
    return sorted(self.animals.keys())
def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_names = []
        for animal in animal_types:
            # Add "s" if more than 1
            if self.animals[animal] > 1:
                animal_names.append(f"{animal}s")
            else:
                animal_names.append(animal)
        
        # Join with commas and "and" before the last item
        if len(animal_names) > 1:
            animals_str = ", ".join(animal_names[:-1]) + " and " + animal_names[-1]
        else:
            animals_str = animal_names[0]

        return f"{self.name} farm has {animals_str}."

        