import random
class Game:
     def __init__(self):
        self.user_choice = None
        self.computer_choice = None
        self.result = None
     def get_user_item(self):
         while True:
            choice = input("Choose rock, paper, or scissors: ").lower()
            if choice in ["rock", "paper", "scissors"]:
                self.user_choice = choice
                return choice
            else:
                print("Invalid choice, try again.")
     def get_computer_item(self):
        self.computer_choice = random.choice(["rock", "paper", "scissors"])
        return self.computer_choice
     def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"
     def play(self):
        user_item = self.get_user_item()

        computer_item = self.get_computer_item()

        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            print(f"You selected {user_item}. The computer selected {computer_item}. You win!\n")
        elif result == "loss":
            print(f"You selected {user_item}. The computer selected {computer_item}. You lose!\n")
        else:
            print(f"You selected {user_item}. The computer selected {computer_item}. You drew!\n")

        return result
    
