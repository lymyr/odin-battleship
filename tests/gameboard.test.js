import Gameboard from "../src/gameboard.js";
import Ship from "../src/ships.js";

test('place ships', () => {
    let gb = new Gameboard();

    const s = new Ship(3);
    gb.place(s, gb.board[35]);
    expect(gb.board[35][2]).toBe(s);
    expect(gb.board[45][2]).toBe(s);
    expect(gb.board[55][2]).toBe(s);

    const s2 = new Ship(5, false);
    gb.place(s2, gb.board[30]);
    expect(gb.board[30][2]).toBe(s2);
    expect(gb.board[31][2]).toBe(s2);
    expect(gb.board[32][2]).toBe(s2);
    expect(gb.board[33][2]).toBe(s2);
    expect(gb.board[34][2]).toBe(s2);

    const s3 = new Ship(3, false);
    gb.place(s2, gb.board[98]);
    expect(gb.board[98][2]).toBe(null);
    expect(gb.board[99][2]).toBe(null);

    const s4 = new Ship(4);
    gb.place(s4, gb.board[70]);
    expect(gb.board[70][2]).toBe(null);
    expect(gb.board[80][2]).toBe(null);
    expect(gb.board[90][2]).toBe(null);
});

test('place ship overlap', () => {
    let gb = new Gameboard();

    const s = new Ship(3);
    gb.place(s, gb.board[35]);
    expect(gb.board[35][2]).toBe(s);
    expect(gb.board[45][2]).toBe(s);
    expect(gb.board[55][2]).toBe(s);

    const s2 = new Ship(5, false);
    gb.place(s2, gb.board[31]);
    expect(gb.board[31][2]).toBe(null);
    expect(gb.board[32][2]).toBe(null);
    expect(gb.board[33][2]).toBe(null);
    expect(gb.board[34][2]).toBe(null);
    expect(gb.board[35][2]).toBe(s);

    const s3 = new Ship(3);
    gb.place(s, gb.board[15]);
    expect(gb.board[15][2]).toBe(null);
    expect(gb.board[25][2]).toBe(null);
    expect(gb.board[35][2]).toBe(s);
})

test('attack cells', () => {
    let gb = new Gameboard();

    const s = new Ship(3);
    gb.place(s, gb.board[15]);
    gb.receiveAttack([1, 5]);
    expect(gb.board[15][3]).toBe(false);
    expect(gb.board[15][2].hits).toBe(1);
    expect(s.isSunk()).toBe(false);

    gb.receiveAttack([2, 5]);
    expect(gb.board[25][3]).toBe(false);
    expect(s.isSunk()).toBe(false);
    gb.receiveAttack([3, 5]);
    expect(gb.board[35][3]).toBe(false);
    expect(s.isSunk()).toBe(true);
});