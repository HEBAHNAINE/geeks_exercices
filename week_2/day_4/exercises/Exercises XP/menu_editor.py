from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n=== Restaurant Menu Manager ===")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")
        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("\nFinal Menu:")
            show_restaurant_menu()
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice, please try again.")

def add_item_to_menu():
    name = input("Enter item name: ").strip()
    try:
        price = float(input("Enter item price: ").strip())
    except ValueError:
        print("Price must be a number.")
        return
    item = MenuItem(name, price)
    try:
        item.save()
        print(f"Item '{name}' added successfully.")
    except Exception as e:
        print("Error adding item:", e)

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem(name)
    try:
        item.delete()
        print(f"Item '{name}' deleted successfully.")
    except Exception as e:
        print("Error deleting item:", e)

def update_item_from_menu():
    old_name = input("Enter the current item name: ").strip()
    try:
        old_price = float(input("Enter the current item price: ").strip())
    except ValueError:
        print("Price must be a number.")
        return
    item = MenuItem(old_name, old_price)

    new_name = input("Enter the new item name: ").strip()
    try:
        new_price = float(input("Enter the new item price: ").strip())
    except ValueError:
        print("Price must be a number.")
        return

    try:
        item.update(new_name, new_price)
        print(f"Item '{old_name}' updated successfully to '{new_name}' with price {new_price}.")
    except Exception as e:
        print("Error updating item:", e)

def view_item():
    name = input("Enter the item name to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Found Item: {item.name} - {item.price}")
    else:
        print("Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("Menu is empty.")
    else:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(f"{item.name} - ${item.price}")
