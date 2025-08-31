import tkinter as tk
board = [""] * 9
buttons = []
root = tk.Tk()
root.title("Tic Tac Toe")
def display_board():
    for i in range(9):
        buttons[i].config(text=board[i])
for i in range(9):
    btn = tk.Button(root, text="", font=("Helvetica", 32), width=3, height=1)
    btn.grid(row=i//3, column=i%3, padx=5, pady=5)
    buttons.append(btn)
   
    def player_input(player):
     while True:
        try:
            pos = int(input(f"Player {player}, enter position (1-9): ")) - 1
            if pos < 0 or pos > 8:
                print("Position must be between 1 and 9.")
            elif board[pos] != "":
                print("That position is already taken.")
            else:
                board[pos] = player
                break
        except ValueError:
            print("Please enter a valid number.")
    def check_win():

     wins = [
        (0,1,2), (3,4,5), (6,7,8),  
        (0,3,6), (1,4,7), (2,5,8),  
        (0,4,8), (2,4,6)             
    ]
     for a, b, c in wins:
        if board[a] != "" and board[a] == board[b] == board[c]:
            return board[a] 
     if all(cell != "" for cell in board):
        return "Tie"  
     return None 


def play():
    global board
    board = [""] * 9   
    current_player = "X"

    while True:
        display_board()               
        player_input(current_player)    
        result = check_win()
        if result:
            display_board()             
            if result == "Tie":
                print("It's a tie!")
            else:
                print(f"Player {result} wins!")
            break                      

        current_player = "O" if current_player == "X" else "X"
play()
