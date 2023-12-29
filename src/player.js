import { convertPosition } from "./helper_fn.js";

export class Player {
  constructor(name) {
    this.name = name;
  }

  attackPosition(gameboard, position) {
    return gameboard.receiveAttack(position);
  }

  randomAttack(gameboard) {
    let randomPosition = Math.floor(Math.random() * 100);

    if (gameboard.attacksReceived) {
      for (let i = 0; i < gameboard.attacksReceived.length; i++) {
        if (gameboard.attacksReceived[i] === randomPosition) {
          return false;
        }
      }
    }

    return this.attackPosition(gameboard, randomPosition);
  }
}
