import { Ship } from "./ship";

test("Create object", () => {
  const obj = new Ship(4);

  expect(obj).toHaveProperty("length", 4);
  expect(obj).toHaveProperty("timesHit", 0);
});

test("Hit ship", () => {
  const obj = new Ship(4);
  obj.hit();

  expect(obj.timesHit).toBe(1);

  obj.hit();
  obj.hit();

  expect(obj.timesHit).toBe(3);
});

test("Sunk ship", () => {
  const obj = new Ship(3);
  obj.timesHit = 3;

  expect(obj.isSunk()).toBe(true);

  obj.timesHit = 2;

  expect(obj.isSunk()).toBe(false);
});
