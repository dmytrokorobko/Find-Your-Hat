# Hat in the Field Game

Welcome to the "Hat in the Field" game! This is a simple command-line game where you navigate through a randomly generated field to find a hidden hat while avoiding holes.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Game Rules](#game-rules)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install and run this project, you need Node.js and npm installed on your machine.

1. Clone the repository:
    ```bash
    git clone https://github.com/dmytrokorobko/Find-Your-Hat.git
    cd hat-in-the-field
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the game:
    ```bash
    node main.js
    ```

## Usage

Once you run the game, you will be presented with a 10x10 field. Use the following keys to move:

- `u` - move up
- `d` - move down
- `l` - move left
- `r` - move right

To quit the game at any time, press `q`.

## Game Rules

- The objective of the game is to find the hat (`^`) hidden in the field.
- The field (`░`) may contain holes (`O`) that you must avoid.
- If you step into a hole, you lose the game.
- If you move outside the field boundaries, you lose the game.
- The path you have taken is marked with an asterisk (`*`).

## Project Structure

- `main.js`: Initializes the game, player, and field, and contains the game loop.
- `Field.js`: Contains the `Field` class that handles the field's layout and printing.
- `Player.js`: Contains the `Player` class that manages the player's position and movements.
- `Game.js`: Contains the `Game` class that manages the game's logic, including player moves and game state.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy playing! If you have any questions or issues, feel free to open an issue or contact me.

---

Text has been generated with ChatGPT.