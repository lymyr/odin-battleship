import { p1, p2 } from "./logic/GameController.js";
import Boards from "./components/Boards.js";
import Prompt from "./components/Prompt.js";

class Render {
  static render() {
    let size = 40;

    Boards.render(size);
    if (Boards.haveAllShipsSunk(p2))
        Prompt.render()
    else if (Boards.haveAllShipsSunk(p1))
        Prompt.render("Player 2")
    else
        Boards.addCellClicks(p1, p2);
  }


    static addDrag(player) {
        const shipListDOM = document.querySelector("ship-list");
        let dragged;

        for (let i = 0; i < shipListDOM.length; i++) {
            if (player.shipList[i].length > 0) {
                shipListDOM[i].addEventListener("dragstart", () => {
                    dragged = player.shipList[i][0]
                })
            }
        }

        const cells = document.querySelectorAll("player1 board cell")

        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("dragover", e => e.preventDefault())
            cells[i].addEventListener("drop", e => {
                e.preventDefault()
                p1.board.place(dragged, [Math.floor(i/10), i%10])
            })
        }
    }
}

export default Render;
