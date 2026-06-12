import Helper from "../helpers/Helper.js";
import { p1, p2 } from "../index.js";
import Boards from "./Boards.js";

class Prompt {
    static container = document.querySelector("header-container")
    
    static renderText(text="Welcome!") {
        const h1 = document.createElement("h1");
        h1.textContent = text
        this.container.appendChild(h1);
    }

    static renderButton(text="Start Game") {
        const btn = document.createElement("button")
        btn.textContent = text
        this.container.appendChild(btn)

        btn.addEventListener("click", () => {
            p2.reset()
            Helper.randomizeBoard(p2)
            Boards.render()
            Boards.addCellClicks(p1, p2)
            this.container.innerHTML = ""
            Boards.removeRandomizeButton()
        })
    }
}

export default Prompt