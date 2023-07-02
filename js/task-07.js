const line = document.getElementById("font-size-control");
const textLine = document.getElementById("text");

line.addEventListener("input", () => {
  console.log(line.value);
  console.log(textLine.style.fontSize);
  textLine.style.fontSize = `${Number(line.value)}px`;
});
