import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderGameboard, renderShips, renderShots } from "./render.js";
import gear from "./assets/icons8-gear-64.png";
import help from "./assets/icons8-help-64.png";
import info from "./assets/icons8-info-64.png";
import "./style.css";
import { createModal } from "./modal.js";

const John = new Player("John");
const Lian = new Player("Lian");

const johnGameboard = new Gameboard();
const lianGameboard = new Gameboard();

johnGameboard.placeShip("0", "y", 5);
johnGameboard.placeShip("43", "x", 4);
johnGameboard.placeShip("26", "y", 3);
johnGameboard.placeShip("84", "x", 3);
johnGameboard.placeShip("69", "y", 2);

lianGameboard.placeShip("01", "y", 5);
lianGameboard.placeShip("44", "x", 4);
lianGameboard.placeShip("36", "y", 3);
lianGameboard.placeShip("85", "x", 3);
lianGameboard.placeShip("79", "y", 2);

lianGameboard.receiveAttack("1");
lianGameboard.receiveAttack("45");
lianGameboard.receiveAttack("36");

/* const firstGameboard = document.querySelector(".gameboard:first-of-type");
renderGameboard(firstGameboard);

const secondGameboard = document.querySelector(".gameboard:nth-of-type(2)");
renderGameboard(secondGameboard);

renderShips(firstGameboard, johnGameboard);
renderShots(secondGameboard, lianGameboard); */

console.log("hi");

createModal();
