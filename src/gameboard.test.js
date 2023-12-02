import { Gameboard } from "./gameboard.js";

test("Place a ship", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);

  obj.placeShip(32, "x", 3);

  expect(obj.ships.length).toBe(2);

  obj.placeShip(42, "y", 2);

  expect(obj.ships.length).toBe(3);
});

test("Invalid position", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);

  obj.placeShip(22, "x", 3);

  expect(obj.ships.length).toBe(1);
});

test("Receive attack horizontal", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);

  expect(obj.receiveAttack(22)).toBe(true);
  expect(obj.receiveAttack(32)).toBe(false);
});

test("Receive attack vertical", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "y", 3);

  expect(obj.receiveAttack(22)).toBe(true);
  expect(obj.receiveAttack(23)).toBe(false);
});
