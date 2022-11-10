let data=JSON.parse(localStorage.getItem("Cart_Product"));
document.getElementById("price").innerText=`${"$"+ data.price}`
document.getElementById("pric").innerText=`${"$"+ data.price}`