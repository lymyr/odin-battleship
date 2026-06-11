import Ship from "./ships.js";
import { p1, p2 } from "./gameController.js";

class Render {
  static render() {
    let size = 40;

    this.boards(size)
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

            if (boardCell[3] == true) {
                cell.addEventListener("click", () => {
                    playerList[i].board.receiveAttack([boardCell[0], boardCell[1]]);
                    this.render();
                });
            }
            else
                cell.classList.add("hit");

            if (boardCell[2] != null && boardCell[2].isSunk()) {
                cell.classList.add("sunk");
            }
        })
    }
  }
}

export default Render;
