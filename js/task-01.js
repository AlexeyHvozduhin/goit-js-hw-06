const arrayWithElements = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${arrayWithElements.length}`);

// OR

// console.log(
//   `Количество элементов li с классом item, посчитанных удобным способом равно: ${
//     document.getElementById("categories").children.length
//   }`
// );

arrayWithElements.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}\n` +
      `Elements: ${
        element.querySelector("ul").getElementsByTagName("li").length
      }`
    //   Данное решение предусмотрено тем, что после первого єлемента (h2) может быть добавлено что-то.
  );
});
