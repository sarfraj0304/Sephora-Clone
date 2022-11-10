import { navbar } from "../components/navbar.js"

let header=document.getElementById("header")
header.innerHTML=navbar()

const getData=async()=>{
    try{
        let res=await fetch("http://localhost:3000/hair");
        let data = await res.json();
    
        appendData(data)}
        catch(e){

        }
    }

   const appendData= (data) =>{
    console.log(data)
    data.forEach((el)=>{
    if(el.active==true){
        var div=document.createElement("div")
        div.setAttribute("class","item-card")
    var img=document.createElement("img");
    img.src=el.image;


    var cName=document.createElement("h3");
    cName.innerText=el.brandName;

    var pName=document.createElement("p");
    pName.innerText=el.productName;

    

    var pPrice=document.createElement("h4");
    pPrice.innerText= el.price;
    div.addEventListener("click",function(){
        red(el)

    })

    div.append(img, cName, pName, pPrice);
    document.getElementById("items").append(div)}

    }) }
    
   getData()

   function red(el){
    localStorage.setItem("wind",JSON.stringify(el.id))
    window.location.href= "detail.html"
   }