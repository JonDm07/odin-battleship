import { Ship } from "./ship.js";
import { convertPosition } from "./helper_fn.js";

export class Gameboard {
  //check if position is not taken

  #positionIsTaken(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
      for (let j = 0; j < arrayB.length; j++) {
        if (arrayA[i] === arrayB[j]) {
          return true;
        }
      }
    }

    return false;
  }

  createPositions(startPoint, rotation, length) {
    const coordinates = convertPosition(startPoint);
    const positions = [Number(startPoint)];

    if (rotation === "x") {
      if (coordinates[1] > 10 - length) {
        return;
      }

      for (let i = 1; i < length; i++) {
        positions.push(Number(`${coordinates[0]}${coordinates[1] + i}`));
      }
    } else if (rotation === "y") {
      if (coordinates[0] > 10 - length) {
        return;
      }
      for (let i = 1; i < length; i++) {
        positions.push(Number(`${coordinates[0] + i}${coordinates[1]}`));
      }
    }

    return positions;
  }

  placeShip(startPosition, rotation, length) {
    //check if position or rotation or not empty args
    if (!rotation || !startPosition) {
      return;
    }

    //createPositions check if position is valid and then creates positions
    //remove, check before calling function
    const shipPositions = this.createPositions(startPosition, rotation, length);

    if (!shipPositions) {
      return;
    }

    if (rotation !== "x" && rotation !== "y") {
      return;
    }

    if (!this.ships) {
      this.ships = [];
    }

    // check if position is not taken
    for (let i = 0; i < this.ships.length; i++) {
      const ship = this.ships[i];

      if (this.#positionIsTaken(ship.position, shipPositions) === true) {
        return;
      }
    }

    //add ship
    const ship = new Ship(length);
    ship.rotation = rotation;
    ship.position = shipPositions;
    this.ships.push(ship);
  }

  receiveAttack(number) {
    if (!this.attacksReceived) {
      this.attacksReceived = [];
    }

    this.attacksReceived.push(number);

    if (this.ships) {
      //check if ship is hit
      for (let i = 0; i < this.ships.length; i++) {
        const ship = this.ships[i];

        if (ship.position.includes(number) === true) {
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
