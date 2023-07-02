const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const usList = document.querySelector("#ingredients");
const arrayElements = [];

ingredients.map((element) => {
  const listElementRef = document.createElement("li");
  listElementRef.textContent = element;
  listElementRef.classList.add("item");
  arrayElements.push(listElementRef);
});

usList.append(...arrayElements);
