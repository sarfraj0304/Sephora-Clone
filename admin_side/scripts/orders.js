// const getOrdersData = async () => {
//     let res = await fetch(`http://localhost:3000/order_details`);
//     let data = await res.json();
//     console.log(data);
//     appendOrdersData(data);
//   };
//   getOrdersData();

//   const appendOrdersData = (data) => {
//     let orders_div = document.getElementById("orders_tbody");
//     orders_div.innerHTML = "";
//     data.forEach(({ fname, lname, number, productName, id, address, date, price }) => {
//       let tr = document.createElement("tr");
//       let order_id = document.createElement("td");
//       order_id.innerText = id;
//       let order_firstName = document.createElement("td");
//       order_firstName.innerText = fname;
//       let order_lastName = document.createElement("td");
//       order_lastName.innerText = lname;
//       let order_number = document.createElement("td");
//       order_email.innerText = number;
//       let order_items = document.createElement("td");
//       order_pass.innerText = productName;
//       let order_address = document.createElement("td");
//       order_address.innerText = address;
//       let order_price = document.createElement("td");
//       order_price.innerText = price;
//       let order_date = document.createElement("td");
//       order_date.innerText = date;

//       tr.append(
//         order_id,
//         order_firstName,
//         order_lastName,
//         order_number,
//         order_items,
//         order_address,
//         order_price,
//         order_date
//       );
//       orders_div.append(tr);
//     });
//   };
