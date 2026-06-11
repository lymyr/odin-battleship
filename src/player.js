import Gameboard from "./gameboard.js";

class Player {
  #board;

  constructor(turn = false) {
    this.#board = new Gameboard();
    this.turn = turn
  }

  get board() {
    return this.#board;
  }

  reset() {
    this.#board = new Gameboard()
  }
}

export default Player;
