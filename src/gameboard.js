import { Ship } from "./ship.js";
import { convertPosition } from "./helper_fn.js";

export class Gameboard {
  //check if position is not taken

  #positionIsTaken(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
      for (let j = 0; j < arrayB.length; j++) {
        if (arrayA[i].toString() === arrayB[j].toString()) {
          return true;
        }
      }
    }

    return false;
  }

  createPositions(startPoint, rotation, length) {
    const positions = [];

    for (let i = 1; i < length; i++) {
      if (rotation === "x") {
        if (startPoint[1] + i > 9) {
          throw new Error("Invalid ship position");
        }

        positions.push([startPoint[0], startPoint[1] + i]);
      } else if (rotation === "y") {
        if (startPoint[0] + i > 9) {
          throw new Error("Invalid ship position");
        }

        positions.push([startPoint[0] + i, startPoint[1]]);
      }
    }

    return positions;
  }

  placeShip(position, rotation, length) {
    //check if position or rotation or not empty args
    if (
      rotation === undefined ||
      rotation === null ||
      position === undefined ||
      position === null
    ) {
      return;
    }

    const startPoint = convertPosition(position);
    const newShipPositions = [startPoint].concat(
      this.createPositions(startPoint, rotation, length)
    );

    //check if position is not out of gameboard
    //remove, check before calling function
    if (
      startPoint[0] > 9 ||
      startPoint[1] > 9 ||
      startPoint[0] < 0 ||
      startPoint[1] < 0
    ) {
      return;
    }

    if (!this.ships) {
      this.ships = [];
    }

    // check if position is not taken
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];

      if (this.#positionIsTaken(ship.position, newShipPositions) === true) {
        return;
      }
    }

    //add ship
    const ship = new Ship(length);
    ship.rotation = rotation;
    ship.position = newShipPositions;
    this.ships.push(ship);
  }

  receiveAttack(number) {
    const position = [convertPosition(number)];

    if (!this.attacksReceived) {
      this.attacksReceived = [];
    }

    this.attacksReceived.push(position[0]);

    if (this.ships) {
      //check if ship is hit
      for (let i = 0; i < this.ships.length; i++) {
        const ship = this.ships[i];

        if (this.#positionIsTaken(ship.position, position) === true) {
          ship.hit();
          return true;
        }
      }
    }
    return false;
  }

  //return number of ships not sunk yet
  get shipsNotSunk() {
    const array = [];

    for (let ship of this.ships) {
      if (!ship.isSunk()) array.push(ship);
    }

    return array.length;
  }
}
