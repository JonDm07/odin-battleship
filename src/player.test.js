import { Gameboard } from "./gameboard";
import { Player } from "./player";

test("Random smartAttack", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  player.smarterAttack(obj, 34);

  expect(obj.attacksReceived.length).toBe(1);
});

test("set attackAxis", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  obj.placeShip("5", "x", "4");

  player.smarterAttack(obj, 5);
  player.smarterAttack(obj, 15);
  player.smarterAttack(obj, 6);

  expect(player.attackAxis).toBe("x");

  obj.placeShip("26", "y", "3");
  player.attackAxis = undefined;
  player.centerPosition = undefined;
  player.attacksQueue = [];

  player.smarterAttack(obj, 26);
  player.smarterAttack(obj, 24);
  player.smarterAttack(obj, 27);
  player.smarterAttack(obj, 16);
  player.smarterAttack(obj, 36);

  expect(player.attackAxis).toBe("y");
});

test("don't set attackAxis", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  obj.placeShip("5", "x", "4");

  player.smarterAttack(obj, 5);
  player.smarterAttack(obj, 15);

  expect(player.attackAxis).toBeFalsy();
});

test("queue left and right attacks", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  obj.placeShip("5", "x", "4");

  player.smarterAttack(obj, 5);
  player.smarterAttack(obj, 6);

  expect(player.attacksQueue.length).toBe(8);
});

test("queue up and bottom attacks", () => {
  const player = new Player("John");
  const obj = new Gameboard(player);

  obj.placeShip("5", "y", "4");

  player.smarterAttack(obj, 5);
  player.smarterAttack(obj, 15);

  expect(player.attacksQueue.length).toBe(4);
});
