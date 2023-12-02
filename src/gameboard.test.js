import { Gameboard } from "./gameboard.js";

test("Place a ship", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);

  obj.placeShip(32, "x", 3);

  expect(obj.ships.length).toBe(2);

  obj.placeShip(42, "x", 2);

  expect(obj.ships.length).toBe(3);
});

test("Invalid position", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);
});
