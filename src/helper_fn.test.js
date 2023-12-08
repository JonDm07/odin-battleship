import { convertPosition } from "./helper_fn.js";

test("convert number to position", () => {
  expect(convertPosition(49)).toEqual([4, 9]);
  expect(convertPosition(1)).toEqual([0, 1]);
  expect(convertPosition(64)).toEqual([6, 4]);
  expect(convertPosition(99)).toEqual([9, 9]);
  expect(convertPosition(0)).toEqual([0, 0]);
  expect(convertPosition(100)).toBe(undefined);
});
