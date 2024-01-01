import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderGameboard, renderShips, renderShots } from "./DOM/render.js";
import { assets } from "./assets.js";
import "./style.css";
import { closeModal, createNameModal } from "./DOM/modal.js";
import { addSquareListeners } from "./DOM/squares.js";
import { Gameloop } from "./gameloop.js";

const john = new Player("John");
const lian = new Player("Lian");

const johnGameboard = new Gameboard(john);
const lianGameboard = new Gameboard(lian);

johnGameboard.placeShip("0", "y", 5);
johnGameboard.placeShip("43", "x", 4);
johnGameboard.placeShip("26", "y", 3);
johnGameboard.placeShip("84", "x", 3);
johnGameboard.placeShip("69", "y", 2);

lianGameboard.placeShip("1", "y", 5);
lianGameboard.placeShip("44", "x", 4);
lianGameboard.placeShip("36", "y", 3);
lianGameboard.placeShip("85", "x", 3);
lianGameboard.placeShip("79", "y", 2);

const gameloop = new Gameloop(johnGameboard, lianGameboard);

const modal = createNameModal();

const closeButton = modal.querySelector(".close");
closeButton.addEventListener("click", () => {
  closeModal(modal);
});

const submitButton = modal.querySelector(".submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const name = modal.querySelector("input").value;

  const namePara = document.querySelector(".name > p");
  namePara.textContent = `Admiral ${name}`;

  closeModal(modal);
});

const firstGameboard = document.querySelector(".gameboard:first-of-type");
renderGameboard(firstGameboard);

const secondGameboard = document.querySelector(".gameboard:nth-of-type(2)");
renderGameboard(secondGameboard);

const squares = Array.from(secondGameboard.querySelectorAll(".square"));

renderShips(firstGameboard, johnGameboard);

squares.forEach((square) => {
  square.onclick = function () {
    const position = square.getAttribute("data-num");

    const result = gameloop.playTurnWithAi(position);

    if (result === "Hit") {
      square.style.backgroundColor = "red";
    } else if (result === "Miss") {
      square.style.backgroundColor = "blue";
    }

    square.onclick = undefined;
  };
});
