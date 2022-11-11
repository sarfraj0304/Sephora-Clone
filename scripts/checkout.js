let data = JSON.parse(localStorage.getItem("Cart_Product"));
document.getElementById("price").innerText = `${"$" + data.price}`
document.getElementById("pric").innerText = `${"$" + data.price}`

let bton = document.getElementById("bton")

bton.onclick = () => {



    customer_detail();
}
const customer_detail = async () => {
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let number = document.getElementById("number").value
    let address = document.getElementById("address").value

console.log(fname,lname,number,address)

if(fname==""||lname===""||address==""||number==""){
alert("Please fill the details")
}else{
    let obj = {
        fname,
        lname,
        number,
        address,
    }
    let res = await fetch('http://localhost:3000/customer_details', {

        method: 'POST',
        body: JSON.stringify(obj),
        headers: {

            'Content-Type': 'application/json'
        }

    })

    let data = await res.json();
    console.log(data);
}
// alert("Your Details is save")
// alert("Please choose payment option")
}
let btn = document.getElementById("btn")

btn.onclick = () => {

    prompt("Enter your Number")
    alert("Your order is place")
}

let apply_btn = document.getElementById("apl")

apply_btn.onclick = () => {

    discount();
}
const discount = () => {


    let promo_code = document.getElementById("promo").value

    if (promo_code=="masai30") {
document.getElementById("dscnt").innerText="$"+data.price*30/100

document.getElementById("actual").innerText="$"+data.price*70/100
    }
   else if(promo_code==""){
alert("Please enter Promo code")

    }
   else if (promo_code=="masai20") {
        document.getElementById("dscnt").innerText="$"+data.price*20/100
        document.getElementById("actual").innerText="$"+data.price*80/100
        
            }else{

                alert("Code is not eligible")
            }
}
document.getElementById("actual").innerText="$"+data.price