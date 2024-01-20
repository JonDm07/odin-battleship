export function renderWinnerText(gameloop) {
  const hero = document.querySelector(".hero");

  const para = document.createElement("p");
  para.textContent = `Congratulations ${gameloop.winner.name}, you've won!`;
  para.classList.add("winner");
  hero.appendChild(para);
}
