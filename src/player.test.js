import { Gameboard } from "./gameboard";
import { Player } from "./player";

test("random attack", () => {
  const obj = new Gameboard();
  const player = new Player("John");

  expect(player.name).toBe("John");

  player.randomAttack(obj, Math.floor(Math.random() * 100));

  expect(obj.attacksReceived.length).toBe(1);
});
