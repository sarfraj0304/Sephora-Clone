import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();
let data = JSON.parse(localStorage.getItem("wind"));

const appendData = (data) => {
  let img = document.createElement("img");
  img.src = data.image;

  document.getElementById("div2").append(img);

  var cName = document.createElement("h1");
  cName.innerText = data.brandName;

  var pName = document.createElement("h2");
  pName.innerText = data.productName;
  var des = document.createElement("p");
  des.innerText = data.description;

  var pPrice = document.createElement("h3");
  pPrice.innerText = data.price;

  var rating = document.createElement("h4");
  rating.innerText = "reviews(" + data.reviews + ")";
  document.getElementById("page2").append(cName, pName, pPrice, des, rating);
};
appendData(data);

document.getElementById("btn").addEventListener("click", function () {
  add();
});

let basketProductsData = JSON.parse(localStorage.getItem("addToBasket")) || [];
function add() {
  basketProductsData.push(data);
  localStorage.setItem("addToBasket", JSON.stringify(basketProductsData));
  // location.reload();
}
