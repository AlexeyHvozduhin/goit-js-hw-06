const counter = document.getElementById("value");
const btnOff = document.querySelector('[data-action="decrement"]');
const btnOn = document.querySelector('[data-action="increment"]');

btnOff.addEventListener("click", () => {
  const counterValue = Number(counter.innerHTML) - 1;
  counter.innerHTML = counterValue;
});

btnOn.addEventListener("click", () => {
  const counterValue = Number(counter.innerHTML) + 1;
  counter.innerHTML = counterValue;
});
