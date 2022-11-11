let data=JSON.parse(localStorage.getItem("Cart_Product"));

let data_price=JSON.parse(localStorage.getItem("updatePrice"));

   display(data)


console.log("data",data)

function display(data,updatePrice){
    document.getElementById("rest_div").innerHTML=null
    document.getElementById("image_div").innerHTML=null
        let image=document.createElement("img")
        image.src=data.image;
        let brand=document.createElement("h5")
        brand.innerText=data.brandName
        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.setAttribute("class","btn")
        let price=document.createElement("h4")
        price.innerText=("$"+(updatePrice||data.price))
        
      
        
        document.getElementById("rest_div").append(brand,price,btn)
        document.getElementById("image_div").append(image);
        }
        
        let show = document.getElementById("quantity");
show.onchange=()=>{

    appendPrice();
    
}


function appendPrice(){

    let quantity=document.getElementById("quantity").value;
     document.getElementById("count").innerText=quantity



        let updatePrice=data.price*quantity
document.getElementById("s_price").innerText= "$"+updatePrice
document.getElementById("a_price").innerText= "$"+updatePrice
        display(data,updatePrice)
        localStorage.setItem("updatePrice",JSON.stringify(updatePrice))
       

};

document.getElementById("count").innerText=1
document.getElementById("s_price").innerText= "$"+data.price
document.getElementById("a_price").innerText= "$"+data.price