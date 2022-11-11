let data = JSON.parse(localStorage.getItem("Cart_Product")) || 0;
if (data != 0) {
  document.getElementById("price").innerText = `${"$" + data.price}`;
  document.getElementById("pric").innerText = `${"$" + data.price}`;
}

let bton = document.getElementById("bton");

//save details

bton.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname == "" || number == "" || address == "") {
    alert("Fill Details");
  } else {
    let obj = {
      fname,
      lname,
      number,
      address,
      //   please sachin bhai add krdena
      // cart items add and price
    };
    localStorage.setItem("checkout_details", JSON.stringify(obj));
  }
};
const customer_detail = async () => {
  let obj = {
    fname,
    lname,
    number,
    address,
    //   please sachin bhai add krdena
    // cart items add and price
  };
  let res = await fetch("http://localhost:3000/customer_details", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
  alert("Your Details is save");
  alert("Please choose payment option");
};
let btn = document.getElementById("btn");

btn.onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  if (fname == "" || lname === "" || address == "" || number == "") {
    alert("Please fill the details");
  } else {
    let input_Num = prompt("Enter your Number");
    if (input_Num != null) {
      alert("OTP is sent on Number");
      let input_Otp = prompt("Enter otp");
      if (input_Otp != null) {
        if (input_Otp == "12345") {
          alert("Your order is placed");
          customer_detail();
        } else {
          alert("Worng otp");
        }
      }
    }
  }
};

let apply_btn = document.getElementById("apl");

apply_btn.onclick = () => {
  discount();
};
const discount = () => {
  let promo_code = document.getElementById("promo").value;

  if (promo_code == "masai30") {
    document.getElementById("dscnt").innerText = "$" + (data.price * 30) / 100;

    document.getElementById("actual").innerText = "$" + (data.price * 70) / 100;
  } else if (promo_code == "") {
    alert("Please enter Promo code");
  } else if (promo_code == "masai20") {
    document.getElementById("dscnt").innerText = "$" + (data.price * 20) / 100;
    document.getElementById("actual").innerText = "$" + (data.price * 80) / 100;
  } else {
    alert("Code is not eligible");
  }
};
if (data != 0) {
  document.getElementById("actual").innerText = "$" + data.price;
}
