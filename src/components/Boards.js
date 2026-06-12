import Ship from "../logic/Ships.js";
import Helper from "../helpers/Helper.js";
import { p1, p2 } from "../index.js";
import Prompt from "./Prompt.js";

class Boards {
  static render(size = 40) {
    const playerList = [p1, p2];
    for (let i = 0; i < playerList.length; i++) {
      const board = document.querySelector(`player${i + 1} > board`);
      board.innerHTML = "";

      playerList[i].board.board.forEach((boardCell) => {
        const cell = document.createElement("cell");
        if (boardCell[2] instanceof Ship) cell.setAttribute("class", "ship");
        cell.setAttribute("style", `height: ${size}px; width: ${size}px`);
        board.appendChild(cell);
        board.setAttribute(
          "style",
          `display:grid; grid-template-columns: repeat(10, ${size}px); grid-template-rows: (10, ${size}px);`,
        );

        if (boardCell[3] == false) cell.classList.add("hit");

        if (boardCell[2] != null && boardCell[2].isSunk()) {
          cell.classList.add("sunk");
        }
      });
    }
  }

  static addCellClicks(p1, p2) {
    if (p1.turn) {
      const cellDOM = document.querySelectorAll("player2 cell");
      p2.board.board.forEach((cell) => {
        if (cell[3] == true) {
          cellDOM[cell[0] * p2.board.size + cell[1]].addEventListener(
            "click",
            () => {
              p2.board.receiveAttack([cell[0], cell[1]]);
              if (!(cell[2] instanceof Ship)) {
                p1.turn = false;
                p2.turn = true;
              }

              this.render();
              this.isOngoing();
            },
          );
        }
      });
    } else {
      // to indicate if user turn
      const cellDOM = document.querySelectorAll("player2 cell");
      cellDOM.forEach((cell) => cell.classList.add("disabled"));

      let compHit = Math.floor(Math.random() * 100);
      while (p1.board.board[compHit][3] != true)
        compHit = Math.floor(Math.random() * 100);
      setTimeout(() => {
        p1.board.receiveAttack([Math.floor(compHit / 10), compHit % 10]);
        if (!(p1.board.board[compHit][2] instanceof Ship)) {
          p1.turn = true;
          p2.turn = false;
        }

        this.render();
        this.isOngoing();
      }, 750);
    }
  }

  static isOngoing() {
    if (this.haveAllShipsSunk(p2) || this.haveAllShipsSunk(p1)) {
      if (this.haveAllShipsSunk(p2)) Prompt.renderText("You won!");
      else Prompt.renderText("You lost :(");
      p1.reset();
      Helper.randomizeBoard(p1);
      Prompt.renderButton("Play Again");
      this.addRandomizeButton(p1);
    } else this.addCellClicks(p1, p2);
  }
  static haveAllShipsSunk(player) {
    const board = player.board.board;
    for (let i = 0; i < board.length; i++) {
      if (board[i][2] instanceof Ship && board[i][2].isSunk() == false)
        return false;
    }
    return true;
  }

  static addRandomizeButton(p1) {
    const playerWrapper = document.querySelector("player1");
    const randomizeBtn = document.createElement("button");
    playerWrapper.appendChild(randomizeBtn);

    randomizeBtn.textContent = "Randomize";
    randomizeBtn.addEventListener("click", () => {
      Helper.randomizeBoard(p1);
      this.render();
    });
  }

  static removeRandomizeButton() {
    const playerWrapper = document.querySelector("player1");
    playerWrapper.removeChild(document.querySelector("player1 button"));
  }
}

export default Boards;
