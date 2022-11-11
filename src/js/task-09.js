function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
}

refs.btnChangeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  refs.color.textContent = color;
  document.body.style.backgroundColor = color;
}

