import { Ship } from "./ship";
import { convertPosition } from "./index";

export function Gameboard() {
  return {
    // add start and end position
    // check if position is not taken
    placeShip: function (position, rotation, length) {
      if (
        rotation === undefined ||
        rotation === null ||
        position === undefined ||
        position === null
      ) {
        return;
      }

      if (rotation === "x") {
        const startPoint = convertPosition(position);

        if (startPoint[1] > 9) {
          return;
        }
      } else if (rotation === "y") {
        const coords = convertPosition(position);

        if (coords[0] > 9) {
          return;
        }
      }

      if (!this.shipsPositions) {
        this.shipsPositions = [];
      }

      const ship = Ship(length);
      ship.position = position;
      ship.rotation = rotation;

      this.shipsPositions.push(ship);
    },
  };
}
