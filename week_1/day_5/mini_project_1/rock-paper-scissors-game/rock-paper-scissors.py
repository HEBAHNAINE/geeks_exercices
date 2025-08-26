from game import Game
def get_user_menu_choice():
    print("===== Rock-Paper-Scissors Menu =====")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    choice = input("Enter your choice (1/2/3): ").strip()
    while choice not in ["1", "2", "3"]:
        print("Invalid choice, try again.")
        choice = input("Enter your choice (1/2/3): ").strip()
    return choice
def print_results(results):
    print("\n===== Game Summary =====")
    print(f"Total Wins  : {results.get('win', 0)}")
    print(f"Total Losses: {results.get('loss', 0)}")
    print(f"Total Draws : {results.get('draw', 0)}")
    print("========================")
    print("Thank you for playing Rock-Paper-Scissors! 🎮\n")
def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "1": 
            game = Game()
            result = game.play()
            results[result] += 1 
        elif choice == "2": 
            print_results(results)
        elif choice == "q": 
            print_results(results)
            break
if __name__ == "__main__":
    main()

