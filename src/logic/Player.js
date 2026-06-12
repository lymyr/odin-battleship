import Gameboard from "./Gameboard.js";
import Ship from "./Ships.js";

class Player {
  #board;

  constructor(turn = false) {
    this.#board = new Gameboard();
    this.turn = turn;
    this.shipsList;
    this.refillShips();
  }

  get board() {
    return this.#board;
  }

  reset() {
    this.#board = new Gameboard();
    this.refillShips();
  }

  refillShips() {
    this.shipsList = [
      [new Ship(1), new Ship(1), new Ship(1), new Ship(1)],
      [new Ship(2), new Ship(2), new Ship(2)],
      [new Ship(3), new Ship(3)],
      [new Ship(4)],
    ];
  }
}

export default Player;
