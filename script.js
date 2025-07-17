const fisrtPlayerSimbol = "X";
const secondPlayerSimbol = "O";
const results = document.getElementById("results");
const reset = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    restart();
});
const themeSwitch = document
  .querySelector(".themeSwitch")
  .addEventListener("click", () => {
    lightdark();
  });
const clearScore = document
  .querySelector(".clearScore")
  .addEventListener("click", () => {
    clsScore()
  });
const root = document.documentElement;

let turnCounter = 0;
let board = [];
let someoneWon = false;
let scoreX = 0;
let scoreO = 0;

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
    if (!someoneWon) {
      checkIfWon();
    }
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
    (turnCounter - 1) % 2 === 0 ? (scoreX += 1) : (scoreO += 1);

    // results.textContent = `Player with the: "${
    //   (turnCounter - 1) % 2 === 0 ? fisrtPlayerSimbol : secondPlayerSimbol
    // }", won!! score is ${scoreX} - ${scoreO}`;

    messanger(
      `Player with the: "${
        (turnCounter - 1) % 2 === 0 ? fisrtPlayerSimbol : secondPlayerSimbol
      }", won!! score is ${scoreX} - ${scoreO}`
    );
    someoneWon = true;
  }
};

function restart() {
  for (let i = 0; i < 10; i++) {
    board[i] = i;
  }
  for (const tile in tiles) {
    tiles[tile].textContent = "";
  }

  // results.textContent = "";
  someoneWon = false;
  turnCounter = 0;
}

const lightdark = () => {
  if (getComputedStyle(root).getPropertyValue("--bgColor") === "#8DBCC7") {
    root.style.setProperty("--bgColor", "#393E46");
    root.style.setProperty("--details", "#DFD0B8");
    root.style.setProperty("--hover", "#718b94ff");
  } else {
    root.style.setProperty("--bgColor", "#8DBCC7");
    root.style.setProperty("--details", "#065084");
    root.style.setProperty("--hover", "#A4CCD9");
  }
};

const messanger = (text) => {
  const elem = document.createElement("div");
  elem.textContent = text;
  results.insertBefore(elem ,results.firstChild);
};

const clsScore = () => {
  scoreO = 0;
  scoreX = 0;
  restart();
  while (results.hasChildNodes()) {
    results.removeChild(results.firstChild);
  }
};
