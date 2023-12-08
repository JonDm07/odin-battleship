import { convertPosition } from "./helper_fn.js";

export class Player {
  constructor(name) {
    this.name = name;
  }

  attackPosition(gameboard, position) {
    gameboard.receiveAttack(position);
  }

  randomAttack(gameboard) {
    let randomPosition = Math.floor(Math.random() * 100);
    randomPosition = convertPosition(randomPosition);

    if (gameboard.attacksReceived) {
      for (let i = 0; i < gameboard.attacksReceived.length; i++) {
        if (
          gameboard.attacksReceived[i].toString() === randomPosition.toString()
        ) {
          return;
        }
      }
    }

    this.attackPosition(gameboard, randomPosition);
  }
}
