export function createModal() {
  const body = document.querySelector("body");

  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  body.appendChild(modalDiv);

  const closeButton = document.createElement("button");
  closeButton.classList.add("close");
  closeButton.textContent = "X";
  modalDiv.appendChild(closeButton);

  const para = document.createElement("p");
  para.textContent = "What is your name Admiral:";
  modalDiv.appendChild(para);

  const input = document.createElement("input");
  modalDiv.appendChild(input);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit");
  submitButton.textContent = "Y";
  modalDiv.appendChild(submitButton);
}
