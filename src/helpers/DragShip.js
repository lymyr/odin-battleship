import Boards from "../components/Boards.js";

class DragShip {
    static add(player) {
        const shipListDOM = document.querySelectorAll("ship-list > div");
        
        let dragged;

        for (let i = 0; i < shipListDOM.length; i++) {
            
            if (player.shipsList[i].length > 0) {
                shipListDOM[i].setAttribute("draggable", "true")
                shipListDOM[i].addEventListener("dragstart", () => {
                    dragged = player.shipsList[i][0]
                    console.log(dragged)
                })
            }
        }

        const cells = document.querySelectorAll("player1 board cell")

        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("dragover", e => e.preventDefault())
            cells[i].addEventListener("drop", e => {
                e.preventDefault()
                player.board.place(dragged, [Math.floor(i/10), i%10])
                Boards.render()
                this.add(player)
            })
        }
    }
}

export default DragShip