import Ship from "../src/ships.js";

test("ship length", () => {
  expect(new Ship(5).length).toBe(5);
});

test("ship hit", () => {
  const s = new Ship(3);
  expect(s.hits).toBe(0);
  s.hit();
  expect(s.hits).toBe(1);
  s.hit();
  expect(s.hits).toBe(2);
});

test("ship sunk", () => {
  const s = new Ship(2);
  expect(s.isSunk()).toBe(false);
  s.hit();
  expect(s.isSunk()).toBe(false);
  s.hit();
  expect(s.isSunk()).toBe(true);
});
