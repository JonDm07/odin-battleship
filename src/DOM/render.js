export function renderGameboard(gameboard) {
  let squareNum = 0;
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    gameboard.appendChild(row);

    for (let j = 0; j < 10; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("data-num", squareNum);
      row.appendChild(square);

      squareNum++;
    }
  }
}

export function renderShips(div, gameboard) {
  const squares = div.querySelectorAll(".square");

  for (let i = 0; i < gameboard.ships.length; i++) {
    const positions = gameboard.ships[i].position;

    for (let j = 0; j < positions.length; j++) {
      const square = squares[positions[j]];

      square.classList.add("ship");
    }
  }
}

export function renderShots(div, gameboard) {
  const squares = div.querySelectorAll(".square");
  console.log(gameboard);

  if (!gameboard.attacksReceived) return;

  for (const hit of gameboard.attacksReceived) {
    const square = squares[hit];

    if (gameboard.shipsHit.includes(hit)) {
      square.style.backgroundColor = "red";
    } else {
      square.style.backgroundColor = "blue";
    }
  }
}
