export function renderDragContainer() {
  const header = document.querySelector("header");
  const icons = document.querySelector(".icons");

  const div = document.createElement("div");
  div.classList.add("drag-container");

  header.insertBefore(div, icons);
}

export function renderShipInDragContainer(length) {
  const container = document.querySelector(".drag-container");
  const ship = document.createElement("div");
  ship.classList.add("drag-ship");
  ship.setAttribute("draggable", true);

  container.appendChild(ship);

  for (let i = 0; i < length; i++) {
    const square = document.createElement("div");
    square.classList.add("drag-square");

    ship.appendChild(square);
  }
}
