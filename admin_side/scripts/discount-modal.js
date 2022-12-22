var modal = document.querySelector(".discountModal");

// Get the button that opens the modal
var btn = document.querySelector(".add_discount");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closed")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let addNewDiscount = document.getElementById("add_new_discount");
addNewDiscount.onclick = async () => {
  let code = document.getElementById("new_discount_code").value;
  let amount = document.getElementById("new_discount_perc").value;
  let description = document.getElementById("new_discount_des").value;
  amount = +amount;
  let dataToSend = {
    active: true,
    code,
    description,
    amount,
  };

  let res = await fetch(`https://sephora-server.onrender.com/discounts`, {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Discount Added");
  code.value = "";
  amount.value = "";
  description.value = "";
};
