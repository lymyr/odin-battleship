import Player from "./player.js";
import Ship from "./ships.js";

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

export { p1, p2 };
