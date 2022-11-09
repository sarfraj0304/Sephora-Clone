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
        var div=document.createElement("div")
        div.setAttribute("class","item-card")
    var img=document.createElement("img");
    img.src=el.image;

    var cName=document.createElement("h2");
    cName.innerText=el.brandName;

    var pName=document.createElement("p");
    pName.innerText=el.productName;

    

    var pPrice=document.createElement("h1");
    pPrice.innerText= el.price;

    div.append(img, cName, pName, pPrice);
    document.getElementById("items").append(div)

    }) }
    
   getData()