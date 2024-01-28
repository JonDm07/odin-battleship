import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import {
  renderGameboard,
  renderMainPage,
  renderShips,
  renderShots,
} from "./DOM/render.js";
import { assets } from "./assets.js";
import "./style.css";
import { NameModal } from "./DOM/modal.js";
import { addSquareListeners, squareListeners } from "./DOM/squares.js";
import { Gameloop } from "./gameloop.js";
import { renderWinnerText } from "./DOM/winner.js";

const john = new Player("John");
const lian = new Player("Lian");

const johnGameboard = new Gameboard(john);
const lianGameboard = new Gameboard(lian);
try {
  johnGameboard.placeShip("0", "y", 5);
  johnGameboard.placeShip("43", "x", 4);
  johnGameboard.placeShip("28", "y", 3);
  johnGameboard.placeShip("84", "x", 3);
  johnGameboard.placeShip("69", "y", 2);

  lianGameboard.placeShip("1", "y", 5);
  lianGameboard.placeShip("44", "x", 4);
  lianGameboard.placeShip("39", "y", 3);
  lianGameboard.placeShip("85", "x", 3);
  lianGameboard.placeShip("79", "y", 2);
} catch (error) {
  alert(error);
}

const gameloop = new Gameloop(johnGameboard, lianGameboard);

const modal = NameModal.createNameModal();
NameModal.AddButtonListeners();

renderMainPage(gameloop);
