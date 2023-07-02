const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const usList = document.querySelector("ul.gallery");
const liList = [];

images.forEach((element) => {
  const usListLi = document.createElement("li");
  usListLi.insertAdjacentHTML(
    "beforeend",
    `<img src="${element.url} alt="${element.alt} height=170px"></img>`
  );

  liList.push(usListLi);

  // liList.push(usListLiImg);
});

console.log(liList);

usList.append(...liList);

usList.style.display = "flex";
usList.style.listStyleType = "none";
usList.style.justifyContent = "space-between";
