import Gameboard from "./gameboard.js";

class Player {
  #board;
  constructor() {
    this.#board = new Gameboard();
  }

  get board() {
    return this.#board;
  }
}

export default Player;
