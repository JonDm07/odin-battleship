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
  expect(obj.attacksReceived.length).toBe(2);
});

test("Receive attack vertical", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "y", 3);

  expect(obj.receiveAttack(22)).toBe(true);
  expect(obj.receiveAttack(23)).toBe(false);
  expect(obj.attacksReceived.length).toBe(2);
});

test("Ships not sunk", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "y", 3);
  obj.placeShip(23, "y", 3);

  expect(obj.shipsNotSunk).toBe(2);

  obj.receiveAttack(22);
  obj.receiveAttack(32);
  obj.receiveAttack(42);

  expect(obj.shipsNotSunk).toBe(1);
});
