import { convertPosition } from "./helper_fn.js";

export class Player {
  constructor(name) {
    this.name = name;
  }

  randomAttack(gameboard, randomPosition) {
    if (gameboard.attacksReceived) {
      for (let i = 0; i < gameboard.attacksReceived.length; i++) {
        if (gameboard.attacksReceived[i] === randomPosition) {
          return false;
        }
      }
    }

    return gameboard.receiveAttack(randomPosition);
  }
}
