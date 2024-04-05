import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

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
  expect(() => {
    obj.placeShip(22, "x", 3);
  }).toThrow();
  expect(obj.ships.length).toBe(1);
});

test("Receive attack, ship horizontal", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "x", 3);
  obj.placeShip(1, "x", 2);

  expect(obj.receiveAttack(22)).toBe("Hit");
  expect(obj.receiveAttack(32)).toBe("Miss");
  expect(obj.attacksReceived.length).toBe(2);
});

test("Receive attack, ship vertical", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "y", 3);

  expect(obj.receiveAttack(22)).toBe("Hit");
  expect(obj.receiveAttack(23)).toBe("Miss");
  expect(obj.attacksReceived.length).toBe(2);
});

test("Recieve attack on attacked position", () => {
  const obj = new Gameboard();

  obj.receiveAttack(2);
  expect(obj.receiveAttack(2)).toBe("Attacked");
  expect(obj.attacksReceived.length).toBe(1);
});

test("Sink a ship", () => {
  const obj = new Gameboard();

  obj.placeShip(22, "y", 3);
  obj.placeShip(23, "y", 3);

  expect(obj.shipsNotSunk).toBe(2);

  obj.receiveAttack(22);

  expect(obj.shipsHit[0]).toBe(22);

  obj.receiveAttack(32);

  expect(obj.shipsHit[1]).toBe(32);

  obj.receiveAttack(42);

  expect(obj.shipsNotSunk).toBe(1);
});
/* 
test("Receive smart attack", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  obj.placeShip(22, "x", 3);

  console.log(player.smarterAttack(obj, 22));
});
 */
