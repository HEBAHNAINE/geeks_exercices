from menu_item import MenuItem
from menu_manager import MenuManager

item = MenuItem('Burger', 35)
item.save()  
item.update('Veggie Burger', 37)  
item2 = MenuManager.get_by_name('Veggie Burger')
if item2:
    print(f"Found: {item2.name} - {item2.price}")
items = MenuManager.all_items()
for it in items:
    print(it.name, it.price)



