import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("addToBasket"));

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
    price.textContent = el.price;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
      removeItem(index);
    };
    const selectQty = document.createElement("select");
    selectQty.className = "selectQtyClass";
    // let default_1 = document.createElement("option");
    // default_1.innerText = "Select Quantity";
    let one = document.createElement("option");
    one.innerText = 1;
    let two = document.createElement("option");
    two.innerText = 2;
    let three = document.createElement("option");
    three.innerText = 3;
    let four = document.createElement("option");
    four.innerText = 4;
    let five = document.createElement("option");
    five.innerText = 5;

    // // const quantity = document.getElementById("quantity");
    // selectQty.onchange = () => {
    //   UpdatePriceforQty(el);
    // };
    selectQty.append(one, two, three, four, five);
    productImageBox.append(image);
    productDetailsBox.append(brand, name, itemId, selectQty);
    productPriceBox.append(price, removeBtn);
    productBox.append(productImageBox, productDetailsBox, productPriceBox);
    product_div.append(productBox);
  });
};

// let UpdatePriceforQty = (el) => {
//   console.log(el);
// };
displayCartItems(data);

const quantity = document.querySelectorAll(".selectQtyClass");

quantity.forEach((el, id) => {
  el.addEventListener("change", (e) => {
    let quantityPrice = e.target.parentNode.nextSibling.childNodes[0].innerText;
    let showPrice = e.target.parentNode.nextSibling.childNodes[0];
    quantityPrice = +quantityPrice.replace("$", "");
    // console.log(quantityPrice);
    totalQ(el, id, quantityPrice, showPrice);
    call(id);
    callSum();
  });
});
let obj = {};
let sum;
const totalPrice_id = document.getElementById("totalPrice_id");
let calculateTotalPrice = data.reduce((acc, el) => {
  return acc + el.price;
}, 0);
totalPrice_id.textContent = calculateTotalPrice;
let totalQ = (el, id, price, showPrice) => {
  let inputQ = +el.value;
  showPrice.innerText = inputQ * data[id].price;
  let u_Price = inputQ * data[id].price;
  // console.log(u_Price);
  if (!obj[id]) {
    obj[id] = u_Price;
  } else {
    obj[id] = u_Price;
  }
};
const call = (id) => {
  sum = calculateTotalPrice - data[id].price;
  console.log(data[id].price);
  for (let key in obj) {
    sum += obj[key];
  }
};
const callSum = () => {
  console.log(sum);
  localStorage.setItem("estimatedTotal", JSON.stringify(sum));
  totalPrice_id.textContent = sum;
};

let removeItem = (index) => {
  data.splice(index, 1);
  localStorage.setItem("addToBasket", JSON.stringify(data));
  displayCartItems(data);
};
