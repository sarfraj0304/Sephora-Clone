import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("addToBasket"));

let data_price = JSON.parse(localStorage.getItem("updatePrice"));

let displayCartItems = (data) => {
  const product_div = document.getElementById("product_div");
  product_div.innerHTML = null;
  data.forEach((el, index) => {
    const productBox = document.createElement("div");
    const productImageBox = document.createElement("div");
    const productDetailsBox = document.createElement("div");
    const productPriceBox = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const name = document.createElement("p");
    name.textContent = el.productName;
    const brand = document.createElement("h5");
    brand.textContent = el.brandName;
    const itemId = document.createElement("p");
    let newId = el.id.split("");
    newId[0] = "";
    itemId.textContent = `ITEM ${newId.join("")}`;
    const price = document.createElement("h5");
    price.textContent = `$${el.price}.00`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      removeItem(index);
    };
    productImageBox.append(image);
    productDetailsBox.append(brand, name, itemId);
    productPriceBox.append(price, removeBtn);
    productBox.append(productImageBox, productDetailsBox, productPriceBox);
    product_div.append(productBox);
  });
};

displayCartItems(data);

let removeItem = (index) => {
  data.splice(index, 1);
  localStorage.setItem("addToBasket", JSON.stringify(data));
  displayCartItems(data);
  //   location.reload();
};

function display(data, updatePrice) {
  document.getElementById("product_div").innerHTML = null;
  let image = document.createElement("img");
  image.src = data.image;
  let brand = document.createElement("h5");
  brand.innerText = data.brandName;
  let btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.setAttribute("class", "btn");
  let price = document.createElement("h4");
  price.innerText = "$" + (updatePrice || data.price);

  document.getElementById("rest_div").append(brand, price, btn);
  document.getElementById("image_div").append(image);
}

let show = document.getElementById("quantity");
show.onchange = () => {
  appendPrice();
};

function appendPrice() {
  let quantity = document.getElementById("quantity").value;
  document.getElementById("count").innerText = quantity;

  let updatePrice = data.price * quantity;
  document.getElementById("s_price").innerText = "$" + updatePrice;
  document.getElementById("a_price").innerText = "$" + updatePrice;
  display(data, updatePrice);
  localStorage.setItem("updatePrice", JSON.stringify(updatePrice));
}

document.getElementById("count").innerText = 1;
document.getElementById("s_price").innerText = "$" + data.price;
document.getElementById("a_price").innerText = "$" + data.price;
