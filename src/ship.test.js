import { Ship } from "./ship";

test("Create object", () => {
  const obj = Ship(4);

  expect(obj).toHaveProperty("length", 4);
  expect(obj).toHaveProperty("timesHit", 0);
});

test("Sunk ship", () => {
  const obj = Ship(3);
  obj.timesHit = 3;

  expect(obj.isSunk()).toBe(true);

  obj.timesHit = 2;

  expect(obj.isSunk()).toBe(false);
});
