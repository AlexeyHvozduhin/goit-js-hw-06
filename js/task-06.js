const line = document.getElementById("validation-input");
const correctStringLength = line.dataset.length;

line.addEventListener("blur", () => {
  line.classList.add("invalid");
  line.classList.remove("valid");

  if (line.value.length == correctStringLength)
    line.classList.replace("invalid", "valid");

  if (line.value.length == 0) line.classList.remove("invalid", "valid");
});
