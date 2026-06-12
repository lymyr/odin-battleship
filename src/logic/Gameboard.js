import Ship from "./Ships.js";

class Gameboard {
  #size;
  #board;
  constructor(size = 10) {
    this.#size = size;
    this.#board = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // row, column, ship reference, cell hasnt been hit
        this.#board.push([i, j, null, true]);
      }
    }
  }

  place(ship, cell) {
    if (!(ship instanceof Ship)) throw new Error("Please place a ship.");

    if (this.#isValid(ship, cell)) {
      const startIndex = cell[0] * 10 + cell[1];
      let n = 1;
      if (ship.isVert) n = this.#size;

      for (let i = 0; i < ship.length; i++)
        this.#board[startIndex + n * i][2] = ship;
      return true;
    }
  }

  receiveAttack(coords) {
    const cell = this.#board[coords[0] * this.#size + coords[1]];
    if (cell[2] instanceof Ship) cell[2].hit();
    cell[3] = false;
  }

  get board() {
    return this.#board;
  }

  get size() {
    return this.#size;
  }

  #isValid(ship, cell) {
    if (this.#doesFit(ship, cell) && !this.#hasShips(ship, cell)) return true;
    return false;
  }

  #doesFit(ship, cell) {
    let n;
    if (ship.isVert) n = 0;
    else n = 1;

    if (cell[n] + ship.length > 10) return false;
    else return true;
  }

  #hasShips(ship, cell) {
    let n = 1;
    if (ship.isVert) n = this.#size;

    for (let i = 0; i < ship.length; i++)
      if (this.#board[cell[0] * 10 + cell[1] + n * i][2] instanceof Ship)
        return true;
    return false;
  }
}

export default Gameboard;
