const fisrtPlayerSimbol = "X";
const secondPlayerSimbol = "O";
const results = document.getElementById("results");
const reset = document.querySelector(".reset").addEventListener("click", () => {
  restart();
});
let turnCounter = 0;
let board = [];
let someoneWon = false;

const tiles = new Object();
for (let i = 1; i < 10; i++) {
  tiles[`t${i}`] = document.querySelector(`.t${i}`);

  board.push(tiles[`t${i}`]);

  tiles[`t${i}`].addEventListener("click", () => {
    if (
      tiles[`t${i}`].textContent !== fisrtPlayerSimbol &&
      tiles[`t${i}`].textContent !== secondPlayerSimbol &&
      someoneWon === false
    ) {
      turnCounter % 2 === 0
        ? (tiles[`t${i}`].textContent = fisrtPlayerSimbol)
        : (tiles[`t${i}`].textContent = secondPlayerSimbol);

      board[`t${i}`[1] - 1] =
        turnCounter % 2 === 0 ? fisrtPlayerSimbol : secondPlayerSimbol;

      turnCounter += 1;
    }
    checkIfWon();
  });
}
const checkIfWon = () => {
  if (
    (board[0] === board[1] && board[1] === board[2]) ||
    (board[3] === board[4] && board[4] === board[5]) ||
    (board[6] === board[7] && board[7] === board[8]) ||
    (board[0] === board[3] && board[3] === board[6]) ||
    (board[1] === board[4] && board[4] === board[7]) ||
    (board[2] === board[5] && board[5] === board[8]) ||
    (board[0] === board[4] && board[4] === board[8]) ||
    (board[2] === board[4] && board[4] === board[6])
  ) {
    results.textContent = `player with the: "${
      (turnCounter - 1) % 2 === 0 ? fisrtPlayerSimbol : secondPlayerSimbol
    }", won!!`;

    someoneWon = true;
  }
};

function restart() {
  for (let i = 0; i < 10; i++) {
    board[i] = i;
  }
  for (tile in tiles) {
    tiles[tile].textContent = "";
  }

  results.textContent = "";
  someoneWon = false;
  turnCounter = 0;

  results.textContent = "";
}
