export class NameModal {
  static createNameModal() {
    const body = document.querySelector("body");

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("name-modal");
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

    return modalDiv;
  }

  static AddButtonListeners() {
    const modal = document.querySelector(".name-modal");

    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", (e) => {
      e.preventDefault();

      modal.style.display = "none";
    });

    const submitButton = modal.querySelector(".submit");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();

      const name = modal.querySelector("input").value;

      const namePara = document.querySelector(".name > p");
      namePara.textContent = `Admiral ${name}`;

      modal.style.display = "none";
    });
  }
}
