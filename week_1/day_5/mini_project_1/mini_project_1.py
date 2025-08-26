import random

def get_computer_choice():
    return random.choice(["rock", "paper", "scissors"])

def determine_winner(user, computer):
    if user == computer:
        return "tie"
    elif (user == "rock" and computer == "scissors") or \
         (user == "scissors" and computer == "paper") or \
         (user == "paper" and computer == "rock"):
        return "user"
    else:
        return "computer"

def main():
    print("Welcome to Rock-Paper-Scissors!")
    print("Choose 'rock', 'paper', or 'scissors'. Type 'exit' to quit.\n")
    
    wins = 0
    losses = 0
    ties = 0
    
    while True:
        user_choice = input("Your choice: ").lower()
        
        if user_choice == "exit":
            break
        if user_choice not in ["rock", "paper", "scissors"]:
            print("Invalid choice, try again.")
            continue
        
        computer_choice = get_computer_choice()
        print(f"Computer chose: {computer_choice}")
        
        result = determine_winner(user_choice, computer_choice)
        
        if result == "user":
            print("You won!\n")
            wins += 1
        elif result == "computer":
            print("You lost!\n")
            losses += 1
        else:
            print("It's a tie!\n")
            ties += 1
    print("Game over!")
    print(f"Total wins: {wins}")
    print(f"Total losses: {losses}")
    print(f"Total ties: {ties}")

if __name__ == "__main__":
    main()
