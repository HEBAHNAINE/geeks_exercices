# ------ Exercise 1
class BankAccount:
    
    def __init__(self, balance=0,username="", password=""):
        self.balance = balance
        self.username=username
        self.password=password
        self.authenticated = False

    def deposit(self, n):
        if n <= 0:
            raise Exception("The amount must be a positive integer.")
        self.balance += n
        return self.balance
    def withdraw(self, n):
     if not self.authenticated:
        raise Exception("Action denied: User not authenticated.")
     if n <= 0:
        raise Exception("The amount must be a positive integer.")
     if n > self.balance:
        raise Exception("Insufficient balance.")
     self.balance -= n
     return self.balance

    def authenticat(self,username ,password):
        if self.username==username and self.password==password:
         self.authenticated=True
         return self.authenticated
class MinimumBalanceAccount(BankAccount):
    def __init__(self,minimum_balance=0,balance=0):
        super().__init__(balance) 
        self.minimum_balance=minimum_balance
    def withdraw(self,n):
    
        if n<=0:
         raise Exception("the amount must be a positive integer")  
        if self.balance-n<self.minimum_balance:
             raise Exception("Withdrawal denied: balance would fall below the minimum balance.")
        self.balance-=n
        return self.balance
class ATM:
    def __init__(self, account_list, try_limit):

        if not isinstance(account_list, list):
            raise Exception("account_list must be a list.")
        for acc in account_list:
            if not isinstance(acc, (BankAccount, MinimumBalanceAccount)):
                raise Exception("All items in account_list must be BankAccount or MinimumBalanceAccount instances.")
        self.account_list = account_list
        if not isinstance(try_limit, (int, float)) or try_limit <= 0:
            raise Exception("try_limit must be a positive number.")
        self.try_limit = 2
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== Main Menu ===")
            print("1. Log in")
            print("2. Exit")
            choice = input("Enter your choice: ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting the system. Goodbye!")
                break
            else:
                print("Invalid choice. Please try again.")
    class BankSystem:
     def __init__(self, account_list, try_limit=2):
        # Validate account_list
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list.")
        for acc in account_list:
            if not isinstance(acc, (BankAccount, MinimumBalanceAccount)):
                raise Exception("All items in account_list must be BankAccount or MinimumBalanceAccount instances.")
        self.account_list = account_list

        # Validate try_limit
        if not isinstance(try_limit, (int, float)) or try_limit <= 0:
            raise Exception("try_limit must be a positive number.")
        self.try_limit = 2

        # Current tries counter
        self.current_tries = 0

        # Start main menu
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== Main Menu ===")
            print("1. Log in")
            print("2. Exit")
            choice = input("Enter your choice: ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting the system. Goodbye!")
                break
            else:
                print("Invalid choice. Please try again.")

    def log_in(self, username, password):
        while self.current_tries < self.try_limit:
            matched_account = None
            for account in self.account_list:
                if account.authenticate(username, password):
                    matched_account = account
                    break
            if matched_account:
                print(f"\nLogin successful! Welcome, {username}!")
                self.current_tries = 0 
                self.show_account_menu(matched_account)
                return  
            else:
                self.current_tries += 1
                print(f"Invalid credentials. Attempt {self.current_tries} of {self.try_limit}.")
                if self.current_tries >= self.try_limit:
                    print("Maximum login attempts reached. Shutting down...")
                    exit()
                username = input("Enter username: ")
                password = input("Enter password: ")
    



       
    

# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
