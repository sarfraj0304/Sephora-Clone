import { navbar } from "../components/navbar.js";

const header = document.getElementById("header");
header.innerHTML = navbar();




var data = JSON.parse(localStorage.getItem("wind"))

const getData=async()=>{
    try{
        let res=await fetch(`http://localhost:3000/hair/${data}`);
        let dat = await res.json();
        console.log(dat)
        appendData(dat)
    
        }
        catch(e){

        }}
        const appendData= (data) =>{
            
        
            
                
            let img=document.createElement("img")
            img.src=data.image;
            
            
           document.getElementById("div2").append(img)

     var cName=document.createElement("h1");
    cName.innerText=data.brandName;

    var pName=document.createElement("h2");
    pName.innerText=data.productName;
    var des=document.createElement("p")
    des.innerText=data.description; 

    

    var pPrice=document.createElement("h3");
    pPrice.innerText= data.price;
    document.getElementById("page2").append(cName,pName,pPrice,des)


           
            
        
            } 
            getData()
            document.getElementById("btn").addEventListener("click",function(){add()})

        
            let arr =JSON.parse(localStorage.getItem("add2cart"))||[]


            function add()
            {
                
                arr.push(data)
                localStorage.setItem("add2cart",JSON.stringify(arr))

                

            }
           