import { convertPosition } from "./helper_fn.js";

export class Player {
  constructor(name) {
    this.name = name;
  }

  randomAttack(gameboard, randomPosition) {
    return gameboard.receiveAttack(randomPosition);
  }
}
