function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input", "[type='number']");
const btnAdd = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const mainDiv = document.querySelector("div#boxes");

function createBoxes(amount) {
  const divArray = [];
  // 20 - небольшая хитрость, чтоб сократить код
  let usWidthHeight = 20;

  // Если уже были элементы - наша начальная ширина и длина меняется на размеры последнего ребёнка Дива
  if (mainDiv.lastElementChild !== null) {
    usWidthHeight = mainDiv.lastElementChild.style.width;
    usWidthHeight = usWidthHeight.slice(0, usWidthHeight.indexOf("px"));
  }

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");

    div.style.width = `${Number(usWidthHeight) + 10 * i}px`;
    div.style.height = `${Number(usWidthHeight) + 10 * i}px`;
    console.log(usWidthHeight);
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }

  mainDiv.append(...divArray);
}

function destroyBoxes() {
  mainDiv.innerHTML = "";
}

btnAdd.addEventListener("click", () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
