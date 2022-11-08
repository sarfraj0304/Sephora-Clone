// let input = "hair";

// let getTheApi = async (i) => {
//   let promise = await fetch(
//     `https://sephora.p.rapidapi.com/products/search?q=${i}&pageSize=50&currentPage=1`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "9454a53b12msh7d2f6255a0c720dp1f1455jsn5dbcbc11f2d7",
//         "X-RapidAPI-Host": "sephora.p.rapidapi.com",
//       },
//     }
//   );
//   let raw_data = await promise.json();
//   let final_data = raw_data.products;
//   console.log(final_data);
//   final_data.forEach((el) => {
//     let obj = {
//       id: el.productId,
//       productName: el.productName,
//       image: el.image450,
//       rating: Math.floor(Math.random() * 5 + 1),
//       reviews: el.reviews,
//       price: Math.floor(Math.random() * 4000 + 100),
//       brandName: el.brandName,
//       quantity: 50,
//       description: el.currentSku.imageAltText,
//     };
//     addDataToServer(obj);
//   });
// };
// getTheApi(input);

// let addDataToServer = async (items) => {
//   let promise = await fetch(`http://localhost:3004/hair`, {
//     method: "POST",
//     body: JSON.stringify(items),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// };
