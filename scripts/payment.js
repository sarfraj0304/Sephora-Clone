let btn = document.getElementById("btn");

btn.onclick = () => {
  matchOtp();
};

const matchOtp = () => {
  let cname = document.getElementById("cname").value;
  let ccnum = document.getElementById("ccnum").value;
  let expmonth = document.getElementById("expmonth").value;
  let expyear = document.getElementById("expyear").value;
  let cvv = document.getElementById("cvv").value;

  if (
    cname == "" ||
    ccnum == "" ||
    expmonth == "" ||
    expyear == "" ||
    cvv == ""
  ) {
    alert("All Details are Mandatory");
  } else {
    alert("OTP is send your registered number");
    let enter_otp = prompt("Please enter your OTP");
    if (enter_otp == 12345) {
      alert("Your Order is sucessfully placed");
      customer_detail();
      localStorage.removeItem("shipping_details");
    } else if (enter_otp == null) {
    } else {
      alert("Please enter Correct otp");
    }
  }
};

const customer_detail = async () => {
  let obj = JSON.parse(localStorage.getItem("shipping_details"));
  console.log(obj);
  let res = await fetch("https://sephora-server.onrender.com/order_details", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  alert("Your Details is saved");
};
