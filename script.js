const itemsEl = document.getElementsByClassName("items");
const clearBtn = document.getElementById("clear");
const winnerPara = document.getElementById("winner-para");
let cross = true;
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.background = "#000"
}

for (let i = 0; i < itemsEl.length; i++) {
    itemsEl[i].addEventListener("click", function () {
        if (itemsEl[i].innerHTML == "") {
            itemsEl[i].innerHTML = `${tickIt()}`;

            updateMatrix(i);
            console.log(board);

            itemsEl[i].style.cursor = "not-allowed";
        }
    })

    itemsEl[i].addEventListener("mouseover", function () {
        if (itemsEl[i].innerHTML != "") {
            itemsEl[i].style.cursor = "not-allowed";
        }
    })
}

function tickIt() {
    if (cross) {
        cross = false;
        return "X";
    } else {
        cross = true;
        return "O";
    }
}

clearBtn.addEventListener("click", function () {
    for (let i = 0; i < itemsEl.length; i++) {
        itemsEl[i].style.cursor = "pointer";
        itemsEl[i].innerHTML = "";
    }
    winnerPara.textContent = "Winner:";
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
})

function updateMatrix(k) {
    k = k + 1;
    let count = k;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            k--;
            if (k == 0) {
                if (!cross) {
                    board[i][j] = "X";
                } else {
                    board[i][j] = "O";
                }
            }
        }
    }

    checkWinner()
}

function checkWinner() {

    for (let i = 0; i < board.length; i++) {
        if ((board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === "X") || (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === "X")) {
            console.log("Winner is X");
            winnerPara.textContent += " X";
        } else if ((board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === "O") || (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[2][i] === "O")) {
            console.log("Winner is O");
            winnerPara.textContent += " O";
        }

    }

    if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === "X") || (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === "X")) {
        console.log("Winner is X");
        winnerPara.textContent += " X"
    } else if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === "O") || (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === "O")) {
        console.log("Winner is O");
        winnerPara.textContent += " O";
    }
}