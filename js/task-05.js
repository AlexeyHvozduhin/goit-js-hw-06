const line = document.getElementById("name-input");
const nameUser = document.getElementById("name-output");

line.addEventListener("input", () => {
  if (line.value == "") nameUser.innerHTML = "Anonymous";
  else nameUser.innerHTML = line.value;
});
