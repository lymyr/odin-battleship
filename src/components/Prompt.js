import DragShip from "../helpers/DragShip.js";
import { p1, p2 } from "../logic/GameController.js";
import Render from "../render.js";
import ShipList from "./ShipList.js";

class Prompt {
    static container = document.querySelector("winner-container")
    static render(name="Player 1") {
        this.container.innerHTML = ""
        const winnerText = document.createElement("h1");
        winnerText.textContent = `${name} WON!`
        this.container.appendChild(winnerText);
        
        this.renderButton("Play Again?")
    }

    static renderButton(text="Start Game") {
        const playAgain = document.createElement("button")
        playAgain.textContent = text
        this.container.appendChild(playAgain)

        playAgain.addEventListener("click", () => {
            // to do
            p1.reset()
            p2.reset()
            Render.render()
            ShipList.render(p1)
        })
    }
}

export default Prompt