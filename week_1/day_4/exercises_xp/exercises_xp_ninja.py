# ------ Exercise 1
class GameOfLife:
    def __init__(self, width, height, initial_live_cells):
        self.width = width
        self.height = height
        self.live_cells = set(initial_live_cells) 

    def _neighbors(self, x, y):
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                if dx == 0 and dy == 0:
                    continue
                nx, ny = x + dx, y + dy
                if 0 <= nx < self.width and 0 <= ny < self.height:
                    yield (nx, ny)

    def step(self):
       
        from collections import Counter
        neighbor_counts = Counter()
      
        for cell in self.live_cells:
            for n in self._neighbors(*cell):
                neighbor_counts[n] += 1

        new_live_cells = set()
        for cell, count in neighbor_counts.items():
            if cell in self.live_cells:
                if count == 2 or count == 3:
                    new_live_cells.add(cell)
            else:
                if count == 3:
                    new_live_cells.add(cell)

        self.live_cells = new_live_cells

    def display(self):
        
        for y in range(self.height):
            row = ""
            for x in range(self.width):
                row += "█" if (x, y) in self.live_cells else "."
            print(row)
        print("\n" + "-" * self.width)
initial_state = [(1,0),(1,1),(1,2)]
game = GameOfLife(width=5, height=5, initial_live_cells=initial_state)

generations = 5
for gen in range(generations):
    print(f"Generation {gen}:")
    game.display()
    game.step()

# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
