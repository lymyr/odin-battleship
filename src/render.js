import Ship from "./ships.js";
import { p1, p2 } from "./gameController.js";

class Render {
  static render() {
    let size = 40;

    this.boards(size);
    if (this.allShipsSunk(p1))
        this.showWinner()
    else if (this.allShipsSunk(p2))
        this.showWinner("Player 2")
    else
        this.cellClicks(p1, p2);


  }

  static boards(size) {
    const playerList = [p1, p2]
    for (let i = 0; i < playerList.length; i++) {
        const board = document.querySelector(`player${i+1} > board`)
        board.innerHTML = ""

        playerList[i].board.board.forEach(boardCell => {
            const cell = document.createElement("cell");
            if (boardCell[2] instanceof Ship) cell.setAttribute("class", "ship");
            cell.setAttribute("style", `height: ${size}px; width: ${size}px`);
            board.appendChild(cell);
            board.setAttribute(
            "style",
            `display:grid; grid-template-columns: repeat(10, ${size}px); grid-template-rows: (10, ${size}px);`,
            );

            if (boardCell[3] == false)
                cell.classList.add("hit");

            if (boardCell[2] != null && boardCell[2].isSunk()) {
                cell.classList.add("sunk");
            }
        })
    }
  }

  static cellClicks(p1, p2) {
    if (p1.turn) {
            const cellDOM = document.querySelectorAll("player2 cell")
            p2.board.board.forEach(cell => {
                if (cell[3] == true) {
                    cellDOM[cell[0]*p2.board.size + cell[1]].addEventListener("click", () => {
                        console.log(p1.turn)
                        p2.board.receiveAttack([cell[0], cell[1]]);
                        if (!(cell[2] instanceof Ship)) {
                            p1.turn = false;
                            p2.turn = true;
                        }
                        Render.render();
                    });
                }
            })
        }
    else {
        let compHit = Math.floor(Math.random() * 100)
        while (p1.board.board[compHit][3] != true) {
            compHit = Math.floor(Math.random() * 100)
            console.log([parseInt(compHit.toString[0]), parseInt(compHit.toString[1])])
        }
        p1.board.receiveAttack([Math.floor(compHit/10), compHit%10])
        if (!(p1.board.board[compHit][2] instanceof Ship)) {
            p1.turn = true
            p2.turn = false
        }
        Render.render();
    }
  }

  static showWinner(name="Player 1") {
    const container = document.querySelector("winner-container")
    
    const winnerText = document.createElement("h1");
    winnerText.textContent = `${name} WON!`
    container.appendChild(winnerText);
    
    const playAgain = document.createElement("button")
    playAgain.textContent = "Play Again?"
    container.appendChild(playAgain)

    playAgain.addEventListener("click", () => {
        // to do
        // p1.reset()
        // p2.reset()
        // this.render()
    })
  }

  static allShipsSunk(player) {
        const board = player.board.board;
        for (let i = 0; i < board.length; i++) {
            if (board[i][2] instanceof Ship && board[i][2].isSunk() == false)
                return false
        }
        return true
    }
}

export default Render;
