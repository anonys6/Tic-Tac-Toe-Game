# Tic-Tac-Toe Game

This is a simple and interactive Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript.

![Tic-Tac-Toe Game](https://anonys6.github.io/Tic-Tac-Toe-Game/)

## Features

- Dark mode support based on user's system preference.
- Interactive game board with hover effects.
- Displays the winner of the game.
- Keeps track of the number of wins for each player.
- Allows the game to be reset at any time.

## How to Play

1. Visit the [Tic-Tac-Toe Game](https://anonys6.github.io/Tic-Tac-Toe-Game/).
2. Click on any square to make a move. The game will alternate between "X" and "O".
3. The game will automatically check for a winner after each move.
4. If there's a winner, the game will display the winner and update the win count.
5. Click the "Clear" button to reset the game.

## Code Structure

- `index.html`: Contains the structure of the game board and other elements.
- `style.css`: Contains the styles for the game board and other elements.
- `script.js`: Contains the game logic.

## Future Improvements

- Refactor the `checkWinner` function to reduce code duplication.
- Optimize the `checkWinner` function to start checking for a winner only after the 5th move.
- Simplify the `updateMatrix` function by mapping the index of the clicked element to a row and column in the matrix.

## License

This project is open source and available under the [MIT License](LICENSE).