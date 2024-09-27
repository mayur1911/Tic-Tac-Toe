
# Tic-Tac-Toe Game

A simple Tic-Tac-Toe game built with **HTML**, **CSS**, and **JavaScript**. This project demonstrates core web development principles such as DOM manipulation, event handling, and game logic.

## Features

- A 3x3 grid for playing Tic-Tac-Toe.
- Player alternation between "X" and "O".
- Detection of game winner or draw.
- Displays a button to start a new game after the game ends.
- Game cells are disabled after the game is over to prevent further moves.

## Project Structure

```
├── index.html      # Main HTML file with the game structure
├── script.js       # JavaScript file containing game logic and event handling
├── style.css       # (optional) CSS file for styling the game board
└── README.md       # This README file
```

### HTML

- The game board is created using three rows (`<div class="row">`), each containing three cells (`<div class="col">`). Each cell can be clicked to place the current player's mark ("X" or "O").
  
### JavaScript

- `script.js` contains the main game logic:
  - **checkWinner()**: This function checks whether a player has won or if the game is a draw by checking various win conditions.
  - **handleClick()**: Handles user clicks on the game board and updates the game state accordingly.
  - **clearBoard()**: Resets the game board and starts a new game.
  - **showNewGameButton()**: Displays the "Start New Game" button after the game ends.

### CSS

- (Optional) You can add a `style.css` file for custom styling of the game board and layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mayur1911/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
   ```

2. Open the `index.html` file in a web browser:
   ```bash
   open index.html
   ```

## How to Play

1. Player "X" always starts the game.
2. Players take turns clicking on the grid cells to place their marks ("X" or "O").
3. The game detects when a player has won or if the game is a draw.
4. A "Start New Game" button appears after the game ends, allowing you to reset the board and start again.

## Game Logic

- The game checks for the following win conditions:
  - **Rows**: All three cells in any row have the same mark.
  - **Columns**: All three cells in any column have the same mark.
  - **Diagonals**: All three cells in either diagonal have the same mark.
  
- Once a player wins or the game is a draw, further clicks are disabled until the "Start New Game" button is pressed.

## Customization

- You can add more features like player scores, different grid sizes, or animations.
