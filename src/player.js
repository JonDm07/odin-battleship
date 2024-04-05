import { convertPosition } from "./helper_fn.js";
import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(name) {
    this.name = name;
    this.attackAxis = undefined;
    this.attacksQueue = [];
    this.centerPosition = undefined;
  }

  #getAdjacentPositions(centerPosition, gameboard) {
    const arrayOfPositions = [
      centerPosition + 1,
      centerPosition - 1,
      centerPosition + 10,
      centerPosition - 10,
    ];

    for (let i = 0; i < arrayOfPositions.length; i++) {
      if (arrayOfPositions[i] > 99 || arrayOfPositions[i] < 1) {
        arrayOfPositions.splice(i, 1);
      }

      if (gameboard.attacksReceived.includes(arrayOfPositions[i])) {
        arrayOfPositions.splice(i, 1);
      }
    }

    return arrayOfPositions;
  }

  #findAxisOfAttack(randomPosition) {
    const difference = this.centerPosition - randomPosition;

    if (difference === 1 || difference === -1) {
      this.attackAxis = "x";
    } else if (difference === 10 || difference === -10) {
      this.attackAxis = "y";
    }

    this.attacksQueue = [];
  }

  #leftAndRightAttacks() {
    for (let i = 0; i < 4; i++) {
      this.attacksQueue.push(this.centerPosition + i);
    }

    for (let i = 4; i > 0; i--) {
      this.attacksQueue.push(this.centerPosition - i);
    }
  }

  #upAndBottomAttacks() {
    for (let i = 0; i < 40; i += 10) {
      this.attacksQueue.push(this.centerPosition + i);
    }

    for (let i = 40; i > 0; i -= 10) {
      if (i > 0) return;
      this.attacksQueue.push(this.centerPosition - i);
    }
  }

  randomAttack(gameboard, randomPosition) {
    const result = gameboard.receiveAttack(randomPosition);

    return result;
  }

  smarterAttack(gameboard) {
    const randomPosition = Math.floor(Math.random() * 100);

    //if no attacksQueue, do random attack
    if (this.attacksQueue.length < 1) {
      const result = gameboard.receiveAttack(randomPosition);

      if (result === "Hit") {
        this.attacksQueue = this.attacksQueue.concat(
          this.#getAdjacentPositions(randomPosition, gameboard)
        );

        this.centerPosition = randomPosition;
      }
      return { result, randomPosition };
    }

    //if attackQueue and no axis, find axis of attack
    if (
      this.centerPosition &&
      this.attackAxis === undefined &&
      this.attacksQueue.length > 0
    ) {
      const result = this.randomAttack(gameboard, randomPosition);

      if (result === "Hit") {
        this.#findAxisOfAttack(randomPosition);
      } else {
        this.attacksQueue.splice(this.attacksQueue.indexOf(randomPosition), 1);
      }

      //if axis found, queue attacks
      if (this.attackAxis === "x" && this.attacksQueue.length < 1) {
        this.#leftAndRightAttacks();
      } else if (this.attackAxis === "y" && this.attacksQueue.length < 1) {
        this.#upAndBottomAttacks();
      }

      return { result, randomPosition };
    }

    //if axis found and attacks queued, look for miss in axis attack
    if (this.attackAxis && this.attacksQueue.length > 1) {
      const result = gameboard.receiveAttack(this.attacksQueue[0]);
    }
  }
}

/*

if last turn was hit, try adjacent tiles
if 2 consecutive hits next to each other, continue in this axis untill miss,
after miss, try the other end of axis until miss, after that do random attacks until hit again
repeat process
*/

/*TODO:
recognize when ship is sunk
stop if ship is sunk

*/
