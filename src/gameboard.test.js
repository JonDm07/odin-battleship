import { Gameboard } from "./gameboard";

test("create object", () => {
  const obj = new Gameboard();
  expect(obj instanceof Gameboard).toBe(true);
});
