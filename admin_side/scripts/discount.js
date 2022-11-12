const getDiscountData = async () => {
  let res = await fetch(`http://localhost:3000/discounts`);
  let data = await res.json();
  console.log(data);
  appendDiscountData(data);
};
getDiscountData();

const appendDiscountData = (data) => {
  let discount_div = document.getElementById("discount_tbody");
  discount_div.innerHTML = "";
  data.forEach(({ code, amount, active, id, description }) => {
    let tr = document.createElement("tr");
    let dis_id = document.createElement("td");
    dis_id.innerText = id;
    let dis_code = document.createElement("td");
    dis_code.innerText = code;
    let dis_des = document.createElement("td");
    dis_des.innerText = description;
    let dis_perc = document.createElement("td");
    dis_perc.innerText = amount;
    let dis_status = document.createElement("td");
    let btn = document.createElement("button");
    if (active) {
      btn.classList.add("status_active");
      btn.innerText = "Active";
    } else {
      btn.classList.add("status_inactive");
      btn.innerText = "Inactive";
    }
    dis_status.append(btn);
    btn.onclick = (e) => {
      updateActive(id, btn.innerText);
      if (e.target.innerText == "Active") {
        e.target.classList.add("status_inactive");
        e.target.innerText = "Inactive";
      } else {
        e.target.classList.add("status_active");
        e.target.innerText = "Active";
      }
    };
    tr.append(dis_id, dis_code, dis_des, dis_perc, dis_status);
    discount_div.append(tr);
  });
};
//update active: true||false
const updateActive = async (id, btn_text) => {
  if (btn_text == "Active") {
    let dataToSend = {
      active: false,
    };
    let res = await fetch(`http://localhost:3000/discounts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await res.json();
  } else {
    let dataToSend2 = {
      active: true,
    };
    let resagain = await fetch(`http://localhost:3000/discounts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dataToSend2),
      headers: {
        "Content-type": "application/json",
      },
    });
    let data2 = await resagain.json();
  }
  // console.log(btn_text);
};

//handling filter
let filter_disc = document.getElementById("filter_Disc");
filter_disc.onchange = () => {
  let inputVal = filter_disc.value;
  if (inputVal == "active") {
    handle_filter("active", true);
  } else if (inputVal == "inactive") {
    handle_filter("active", false);
  }
};

const handle_filter = async (query, value) => {
  let res = await fetch(`http://localhost:3000/discounts?${query}=${value}`);
  let data = await res.json();
  appendDiscountData(data);
};

//handle search discount
let searchBtn = document.getElementById("search_discount_btn");
searchBtn.onclick = () => {
  let input_disc = document.getElementById("search_discount").value;
  input_disc = input_disc.split("");
  let convert = input_disc[0].toUpperCase();
  let arr = [];
  arr.push(convert);
  for (let i = 1; i < input_disc.length; i++) {
    arr.push(input_disc[i]);
  }
  input_disc = arr.join("");
  search_discount_data(input_disc);
};

const search_discount_data = async (d) => {
  let res = await fetch(`http://localhost:3000/discounts`);
  let data = await res.json();
  data = data.filter(({ description }) => {
    return description.includes(d);
  });
  appendDiscountData(data);
};
