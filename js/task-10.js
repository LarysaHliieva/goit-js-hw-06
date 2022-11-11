let amount = 0;

const refs = {
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  number: document.querySelector("#controls input"),
}

refs.number.addEventListener("input", onChangeNumber);
refs.btnCreate.addEventListener("click", onCreate);
refs.btnDestroy.addEventListener("click", onDestroy);

function onChangeNumber(event) {
  amount = event.currentTarget.value;
}

function onCreate() {
  createBoxes(amount);
}

function onDestroy() {
  destroyBoxes();
  resetAmount();
}

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${30 + 10*i}px`;
    boxEl.style.height = `${30 + 10*i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    elements.push(boxEl)
  }

  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function resetAmount() {
  amount = 0;
  refs.number.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

