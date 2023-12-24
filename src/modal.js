export function createModal() {
  const body = document.querySelector("body");

  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  body.appendChild(modalDiv);

  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  modalDiv.appendChild(closeButton);

  const para = document.createElement("p");
  para.textContent = "What is your name Admiral:";
  modalDiv.appendChild(para);

  const span = document.createElement("span");
  modalDiv.appendChild(span);

  const input = document.createElement("input");
  span.appendChild(input);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit");
  span.appendChild(submitButton);
}
