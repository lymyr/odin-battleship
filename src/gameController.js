import Player from "./player.js";
import Ship from "./ships.js";

// preplaced for now
const p1 = new Player();
const p2 = new Player();

const s1p1 = new Ship(3);
const s2p1 = new Ship(3, false);
p1.board.place(s1p1, [1, 1]);
p1.board.place(s2p1, [3, 5]);

const s1p2 = new Ship(3);
const s2p2 = new Ship(3, false);
p2.board.place(s1p2, [3, 8]);
p2.board.place(s2p2, [9, 5]);

class Game {
    static start() {
        while (!this.allShipsSunk(p1) || !this.allShipsSunk(p2)) {
            // p1 turn
            
        }
    }

    static allShipsSunk(player) {
        const board = player.board.board;
        for (let i = 0; i < board.length; i++) {
            if (board[i][2] instanceof Ship && board[i][2].isSunk() == false)
                return false
        }
        return true
    }
}

export {Game, p1, p2}