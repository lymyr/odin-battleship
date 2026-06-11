import Ship from "./ships.js"
import { p1, p2 } from "./userInterface.js"

class Render {
    static render() {
        let size = 40;

        this.boardP1(size)
        this.boardP2(size)
    }

    static boardP1(size=40) {
        const board = document.querySelector("player1 > board");
        p1.board.board.forEach(boardCell => {
            const cell = document.createElement("cell");
            if (boardCell[2] instanceof Ship)
                cell.setAttribute("class", "ship")
            cell.setAttribute("style", `height: ${size}px; width: ${size}px`)
            board.appendChild(cell)
        });

        board.setAttribute("style", `display:grid; grid-template-columns: repeat(10, ${size}px); grid-template-rows: (10, ${size}px);`)
    }

    static boardP2(size=40) {
        const board = document.querySelector("player2 > board");
        p2.board.board.forEach(boardCell => {
            const cell = document.createElement("cell");
            if (boardCell[2] instanceof Ship)
                cell.setAttribute("class", "ship")
            cell.setAttribute("style", `height: ${size}px; width: ${size}px`)
            board.appendChild(cell)
        });

        board.setAttribute("style", `display:grid; grid-template-columns: repeat(10, ${size}px); grid-template-rows: (10, ${size}px);`)
    }
}

export default Render