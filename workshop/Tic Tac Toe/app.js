

//tic tac toe 


const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
]


//1. make the board  using grid
//board div 
// 9 cells 
// player 1 / player 2
// indicate who's turn it is. 

const board = document.querySelector("#board");

//players
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");

const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";


let currentPlayer = "1";

player1.classList.add("active");

let togglePlayer = () => {
    currentPlayer = currentPlayer === '1' ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

let verifyWin = () => {

    if (game[0] === game[1] && game[1] === game[2] && (game[0].length > 0) && (game[1].length > 0) && (game[2].length > 0)) {
        win();
    }
    if (game[0] === game[3] && game[3] === game[6] && (game[0].length > 0) && (game[3].length > 0) && (game[6].length > 0)) {
        win();
    }
    if (game[1] === game[4] && game[4] === game[7] && (game[1].length > 0) && (game[4].length > 0) && (game[7].length > 0)) {
        win();
    }
    if (game[2] === game[5] && game[5] === game[8] && (game[2].length > 0) && (game[5].length > 0) && (game[8].length > 0)) {
        win();
    }
    // ROWS
    if (game[3] === game[4] && game[4] === game[5] && (game[3].length > 0) && (game[4].length > 0) && (game[5].length > 0)) {
        win();
    }
    if (game[6] === game[7] && game[7] === game[8] && (game[6].length > 0) && (game[7].length > 0) && (game[8].length > 0)) {
        win();
    }
    // DIAGONALS
    if (game[0] === game[4] && game[4] === game[8] && (game[0].length > 0) && (game[4].length > 0) && (game[8].length > 0)) {
        win();

    }
    else if (game[2] === game[4] && game[4] === game[6] && (game[2].length > 0) && (game[4].length > 0) && (game[6].length > 0)) {
        win();
    }
}

let win = () => {

    alert(`Player ${currentPlayer} wins!`);
    let winner = currentPlayer;
    console.log("the winner is player " + winner)
}
let counter = 0;
let toggleCount = () => {

    counter += 1;
    if (counter === 9) {
        alert("TIE GAME!!!")
    }

}

let handleClick = (e) => {
    const cell = e.target.id;
    const currentCellDiv = document.getElementById(cell);

    if (currentCellDiv.innerText === "") {
        currentCellDiv.innerText = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;

        //add x or o to array

        for (i = 0; i < 9; i++) {
            game[i] = board.children[i].innerText;
        }

        verifyWin();

        togglePlayer();

        toggleCount();

    }

}

board.addEventListener("click", handleClick);


// 2 - Clciking cells - need to be clickable 
//on click make it add X or O to the cell 
// once there is a value it can't be changed. 

// 3 = clear the board (optional)

// 4 - two players 
// flag or variable for current player 
// each player is assigned X or O 


//5 create an array of current cell values; 
//refresh on each change 

//6 create all win conditions
// 




