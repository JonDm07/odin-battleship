import { experiments } from "webpack";
import { Gameloop } from "./gameloop";
import { Player } from "./player";
import { Gameboard } from "./gameboard";

test("start with 0 turns", () => {
  const gameloop = new Gameloop(true, true);

  expect(gameloop.turn).toBe(0);
});

test("start with x turns", () => {
  const gameloop = new Gameloop(true, true, 5);

  expect(gameloop.turn).toBe(5);
});

test("play turn", () => {
  const john = new Player("John");
  const lian = new Player("Lian");

  const johnGameboard = new Gameboard(john);
  const lianGameboard = new Gameboard(lian);

  const gameloop = new Gameloop(johnGameboard, lianGameboard);

  johnGameboard.placeShip("0", "y", 5);
  johnGameboard.placeShip("43", "x", 4);
  johnGameboard.placeShip("26", "y", 3);
  johnGameboard.placeShip("84", "x", 3);
  johnGameboard.placeShip("69", "y", 2);

  lianGameboard.placeShip("1", "y", 5);
  lianGameboard.placeShip("44", "x", 4);
  lianGameboard.placeShip("36", "y", 3);
  lianGameboard.placeShip("85", "x", 3);
  lianGameboard.placeShip("79", "y", 2);

  expect(gameloop.playTurnWithAi(1)).toBe("Hit");

  expect(gameloop.turn).toBe(1);
  expect(gameloop.boardB.attacksReceived.length).toBe(1);
  expect(gameloop.boardB.attacksReceived[0]).not.toBeNaN();
  expect(gameloop.boardB.ships[0].timesHit).toBe(1);
  expect(gameloop.boardA.attacksReceived.length).toBe(1);
  expect(gameloop.boardA.attacksReceived[0]).not.toBeNaN();
});
