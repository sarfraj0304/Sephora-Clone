import { navbar } from "../components/navbar.js";

let header = document.getElementById("header");
header.innerHTML = navbar();

//  footer import
import { footer } from "../components/footer.js";
const footer_id = document.getElementById("footer_id");
footer_id.innerHTML = footer();

const getData = async () => {
  try {
    let res = await fetch("http://localhost:3000/fragrance");
    let data = await res.json();

    appendData(data);
  } catch (e) {}
};

const appendData = (data) => {
  console.log(data);
  document.getElementById("items").innerHTML = "";
  data.forEach((el) => {
    if (el.active == true) {
      var div = document.createElement("div");
      div.setAttribute("class", "item-card");
      var img = document.createElement("img");
      img.src = el.image;

      var cName = document.createElement("h3");
      cName.innerText = el.brandName;

      var pName = document.createElement("p");
      pName.innerText = el.productName;

      var pPrice = document.createElement("h3");
      pPrice.innerText = el.price;

      var rating = document.createElement("p");
      for (let i = 0; i < +el.rating; i++) {
        const star = document.createElement("span");
        star.className = "stars";
        rating.append(star);
      }

      div.addEventListener("click", function () {
        getdetails(el);
      });

      div.append(img, cName, pName, rating, pPrice);
      document.getElementById("items").append(div);
    }
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
    `http://localhost:3000/fragrance?_sort=${query}&_order=${value}`
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
  let res = await fetch(`http://localhost:3000/fragrance?${query}=${value}`);
  let data = await res.json();
  appendData(data);
};

// handle search
// search_items
let search_item = document.getElementById("search_items");
search_item.onkeypress = (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    let input_Data = search_item.value;
    input_Data = input_Data.split("");
    let convert = input_Data[0].toUpperCase();
    let arr = [];
    arr.push(convert);
    for (let i = 1; i < input_Data.length; i++) {
      arr.push(input_Data[i]);
    }
    input_Data = arr.join("");
    // console.log(input_Data[0].toUpperCase());
    search_products_data(input_Data);
  }
};

const search_products_data = async (d) => {
  let res = await fetch(`http://localhost:3000/all_products`);
  let data = await res.json();
  data = data.filter(({ productName }) => {
    return productName.includes(d);
  });
  appendData(data);
};
