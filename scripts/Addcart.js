const getdata=async()=>{


    let res=await fetch(' http://localhost:3000/skincare')
    let data=await res.json()
    display(data);
    console.log(data)
}
getdata();
const display=(data)=>{
for(let i=0;i<data.length-45;i++){
let div=document.createElement("div")

let image=document.createElement("img")
image.src=data[i].image;
let brand=document.createElement("h5")
brand.innerText=data[i].brandName


let price=document.createElement("h5")
price.innerText=data[i].price

let btn=document.createElement('button')
btn.innerText="Add to cart"
btn.onclick=()=>{
    addItem(data[i]);
}

div.append(image,brand,price,btn)
document.getElementById("cart_box").append(div);
}


}
const addItem=(data)=>{

localStorage.setItem("Cart_Product",JSON.stringify(data));
window.location.href="cart.html"
}