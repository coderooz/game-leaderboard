# Game Leaderboard

This is a Node.js and MongoDB application for managing a game leaderboard. Players can submit their scores, and the leaderboard displays the top scores.

## Features

- Submit player scores
- Display top player scores

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/coderooz/game-leaderboard.git
   cd game-leaderboard
   ```

2. Install the dependencies:
   ```bash
   npm install express mongoose body-parser
   ```

3. Start MongoDB server:
   ```bash
   mongod
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the Game Leaderboard API.

## Usage

- **GET /api/players**: Retrieve the top 10 player scores.
- **POST /api/players**: Add a new player score. Example request body:
  ```json
  {
    "name": "Player1",
    "score": 100
  }
  ```

## License

This project is licensed under the Private Use License. See the LICENSE.md file for more details.

## Author

- **Ranit Saha** - [GitHub Profile](https://github.com/coderooz)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## Code of Conduct

Please read the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) file for details on our code of conduct.
```
