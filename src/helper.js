import Render from "./render.js";


class Helper {
    static addHitListener(player, cell, cellDOM) {
        if (cell[3] == true) {
            cellDOM.addEventListener("click", () => {
                player.board.receiveAttack([cell[0], cell[1]]);
                Render.render()
            });
        }
        else 
            cellDOM.classList.add("hit");
    }
}

export default Helper