const tiles = {
  t1 : document.querySelector(".t1"),
  t2 : document.querySelector(".t2"),
  t3 : document.querySelector(".t3"),
  t4 : document.querySelector(".t4"),
  t5 : document.querySelector(".t5"),
  t6 : document.querySelector(".t6"),
  t7 : document.querySelector(".t7"),
  t8 : document.querySelector(".t8"),
  t9 : document.querySelector(".t9"),
}

let turnCounter = 1;
const fisrtPlayerSimbol = "X";
const secondPlayerSimbol = "O";
let board =[];

for (let tile in tiles){
  board.push(tiles[tile])
  tiles[tile].addEventListener("click" ,()=>{

    console.log(tile)

    if(tiles[tile].textContent !== fisrtPlayerSimbol && tiles[tile].textContent !== secondPlayerSimbol){
      turnCounter % 2===0 ? tiles[tile].textContent = fisrtPlayerSimbol 
      : tiles[tile].textContent = secondPlayerSimbol;

      board[tile[1]-1] = turnCounter % 2===0 ? fisrtPlayerSimbol : secondPlayerSimbol;
      console.log(board)

      turnCounter+=1
      
    }
    checkIfWon()
  })
}

const checkIfWon = () => {
  if (board[0] === board[1] && board[1] === board[2]||
      board[3] === board[4] && board[4] === board[5]||
      board[6] === board[7] && board[7] === board[8]||
      board[0] === board[3] && board[3] === board[6]||
      board[1] === board[4] && board[4] === board[7]||
      board[2] === board[5] && board[5] === board[8]||
      board[0] === board[4] && board[4] === board[8]||
      board[2] === board[4] && board[4] === board[6]
    ) {
      console.log("win")
  }
}

function stopGame() {

}


