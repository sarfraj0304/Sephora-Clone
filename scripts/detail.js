import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();

//  footer import 
import { footer } from "../components/footer.js";
const footer_id = document.getElementById("footer_id");
footer_id.innerHTML = footer();


let data = JSON.parse(localStorage.getItem("wind"));

const appendData = (data) => {
  let img = document.createElement("img");
  img.src = data.image;

  document.getElementById("div2").append(img);

  var cName = document.createElement("h3");
  cName.innerText = data.brandName;

  var pName = document.createElement("h1");
  pName.innerText = data.productName;
  var des = document.createElement("h3");
  des.innerText = data.description;

  var pPrice = document.createElement("h1");
  pPrice.innerText = data.price;

  var rating = document.createElement("h3");
  rating.innerText = "Reviews(" + data.reviews + ")";
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
  showCount();
  alert("Added to Cart");
}
function showCount() {
  const basket_count = document.getElementById("basket_count");
  basket_count.innerText = basketProductsData.length;
}
const basket_count = document.getElementById("basket_count");
basket_count.innerText = basketProductsData.length;
