import "./styles.css";
import Helper from "./helpers/Helper.js";
import Player from "./logic/Player.js";
import Boards from "./components/Boards.js";
import Prompt from "./components/Prompt.js";


// preplaced for now
const p1 = new Player(true);
const p2 = new Player();

Helper.randomizeBoard(p1)
Helper.randomizeBoard(p2)

Boards.render()
Prompt.renderButton("Start Game!")
Boards.addRandomizeButton(p1)

export {p1, p2}