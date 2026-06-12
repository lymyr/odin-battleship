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
}

export default Render;
