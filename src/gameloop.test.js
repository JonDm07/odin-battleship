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
  johnGameboard.placeShip("29", "y", 3);
  johnGameboard.placeShip("84", "x", 3);
  johnGameboard.placeShip("69", "y", 2);

  lianGameboard.placeShip("1", "y", 5);
  lianGameboard.placeShip("44", "x", 4);
  lianGameboard.placeShip("39", "y", 3);
  lianGameboard.placeShip("85", "x", 3);
  lianGameboard.placeShip("79", "y", 2);

  const result = gameloop.playTurnWithAi(1);

  expect(typeof result.aiPlay).toBe("string");
  expect(typeof result.play).toBe("string");
  expect(result.randomNum).not.toBe(NaN);
  expect(gameloop.turn).toBe(1);
  expect(gameloop.winner).toBeFalsy();
});

test("win game", () => {
  const john = new Player("John");
  const lian = new Player("Lian");

  const johnGameboard = new Gameboard(john);
  const lianGameboard = new Gameboard(lian);

  const gameloop = new Gameloop(johnGameboard, lianGameboard);

  johnGameboard.placeShip("69", "y", 2);

  lianGameboard.placeShip("79", "y", 2);

  johnGameboard.receiveAttack(69);
  johnGameboard.receiveAttack(79);

  gameloop.checkForWinner();

  expect(gameloop.winner).toHaveProperty("name", "Lian");
});
