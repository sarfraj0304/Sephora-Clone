let data=JSON.parse(localStorage.getItem("Cart_Product"));



display(data);


console.log("data",data)

function display(data){

        let image=document.createElement("img")
        image.src=data.image;
        let brand=document.createElement("h5")
        brand.innerText=data.brandName
        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.setAttribute("class","btn")
        let price=document.createElement("h4")
        price.innerText=(+(data.price))
        
      
        
        document.getElementById("rest_div").append(brand,price,btn)
        document.getElementById("image_div").append(image);
        }
        
        let show = document.getElementById("quantity");
show.onclick=()=>{

    appendPrice();
    
}

function appendPrice(){

    let quantity=document.getElementById("quantity").value;
     document.getElementById("count").innerText=quantity



};
document.getElementById("count").innerText=1