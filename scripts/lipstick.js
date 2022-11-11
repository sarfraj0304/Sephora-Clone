import { navbar } from "../components/navbar.js";

let header = document.getElementById("header");
header.innerHTML = navbar();

const getData = async () => {
  try {
    let res = await fetch("http://localhost:3000/lipstick");
    let data = await res.json();

    appendData(data);
  } catch (e) {}
};

const appendData = (data) => {
  
  data.forEach((el) => {
    

        
      var div = document.createElement("div");
      div.setAttribute("class", "item-card");
      var img = document.createElement("img");
      img.src = el.image;

      var cName = document.createElement("h3");
      cName.innerText = el.brandName;

      var pName = document.createElement("p");
      pName.innerText = el.productName;

      var pPrice = document.createElement("h4");
      pPrice.innerText = el.price;
      
      div.addEventListener("click", function () {
        getdetails(el);
      });

      div.append(img, cName, pName, pPrice);
      document.getElementById("items").append(div);
    
  });
};

getData();

function getdetails(el) {
  localStorage.setItem("wind", JSON.stringify(el));
  window.location.href = "detail.html";
}

let sort_Prods = document.getElementById("sort_Prod");
sort_Prods.onchange = () => {
  let inputVal = sort_Prods.value;
  if (inputVal == "asc") {
    sort_handle("price", "asc");
  } else if (inputVal == "desc") {
    sort_handle("price", "desc");
  }
};

//handle filter
const sort_handle = async (query, value) => {
  document.getElementById("items").innerHTML = null;

  let res = await fetch(
    `http://localhost:3000/lipstick?_sort=${query}&_order=${value}`
  );
  let data = await res.json();

  appendData(data);
};
let filter_Prods = document.getElementById("filter_Prod");
filter_Prods.onchange = () => {
  let inputVal = filter_Prods.value;

  if (inputVal == "999") {
    handle_filter("price_lte", 999);
  } else if (inputVal == "1499") {
    handle_filter("price_lte", 1499);
  } else if (inputVal == "1999") {
    handle_filter("price_gte", 1999);
  }
};

const handle_filter = async (query, value) => {
  document.getElementById("items").innerHTML = null;
  let res = await fetch(`http://localhost:3000/lipstick?${query}=${value}`);
  let data = await res.json();
  appendData(data);
};
