import { renderWinnerText } from "./winner.js";

export function squareListeners(squaresA, squaresB, gameloop) {
  squaresA.forEach((square) => {
    square.onclick = function () {
      const position = square.getAttribute("data-num");

      const result = gameloop.playTurnWithAi(position);

      if (result.play === "Hit") {
        square.style.backgroundColor = "red";
      } else if (result.play === "Miss") {
        square.style.backgroundColor = "blue";
      }

      if (result.aiPlay !== "Attacked") {
        if (result.aiPlay === "Hit") {
          squaresB[result.randomNum].style.backgroundColor = "red";
        } else if (result.aiPlay === "Miss") {
          squaresB[result.randomNum].style.backgroundColor = "blue";
        }
      }

      gameloop.checkForWinner();

      if (gameloop.winner) {
        renderWinnerText(gameloop);

        squaresA.forEach((square) => {
          square.onclick = undefined;
        });
      }

      square.onclick = undefined;
    };
  });
}
