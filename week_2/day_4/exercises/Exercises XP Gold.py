# Step 1: Create dictionary of users
users = {
    "ali": "password123",
    "mohamed": "qwerty",
    "heba": "abc123"
}


logged_in = None


while True:
    action = input("Type 'login' to log in, 'exit' to quit: ").lower()

    if action == "exit":
        print("Exiting program...")
        break

    elif action == "login":
        username = input("Enter username: ")
        password = input("Enter password: ")

        if username in users and users[username] == password:
            print("You are now logged in")
            logged_in = username
        else:
            print("Invalid username or password")
            
            
            signup_choice = input("User does not exist. Would you like to sign up? (yes/no): ").lower()
            if signup_choice == "yes":
                while True:
                    new_username = input("Enter a new username: ")
                    if new_username in users:
                        print("Username already exists, try again.")
                    else:
                        break
                new_password = input("Enter a password: ")
                users[new_username] = new_password
                print(f"User '{new_username}' created successfully! You can now log in.")

    else:
        print("Unknown command, try again.")
 # login + signup + database + password hashing
import sqlite3
import bcrypt

conn = sqlite3.connect("users.db")
cursor = conn.cursor()


cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password BLOB NOT NULL
)
""")
conn.commit()
def signup():
    while True:
        new_username = input("Enter a new username: ")
        cursor.execute("SELECT * FROM users WHERE username = ?", (new_username,))
        if cursor.fetchone():
            print("Username already exists, try again.")
        else:
            break
    new_password = input("Enter a password: ")
    # Hash password
    hashed = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (new_username, hashed))
    conn.commit()
    print(f"User '{new_username}' created successfully!")
def login():
    username = input("Enter username: ")
    password = input("Enter password: ")

    cursor.execute("SELECT password FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()
    
    if result and bcrypt.checkpw(password.encode('utf-8'), result[0]):
        print("You are now logged in")
        return username
    else:
        print("Invalid username or password")
        signup_choice = input("User does not exist. Would you like to sign up? (yes/no): ").lower()
        if signup_choice == "yes":
            signup()
        return None

logged_in = None

while True:
    action = input("Type 'login' to log in, 'exit' to quit: ").lower()

    if action == "exit":
        print("Exiting program...")
        break

    elif action == "login":
        logged_in = login()

    else:
        print("Unknown command, try again.")
conn.close()
