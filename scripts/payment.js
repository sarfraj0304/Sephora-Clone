

let btn=document.getElementById("btn");

btn.onclick=()=>{
    matchOtp();

}

const matchOtp=()=>{
let cname=document.getElementById("cname").value
let ccnum=document.getElementById("ccnum").value
let expmonth=document.getElementById("expmonth").value
let expyear=document.getElementById("expyear").value
let cvv=document.getElementById("cvv").value


if(cname==""||ccnum==""||expmonth==""||expyear==""||cvv==""){

    alert("All Details are Mandatory")
}else{
    
    alert("OTP is send your registered number")
let enter_otp=prompt("What is Your OTP");
if(enter_otp==275202||enter_otp==54321){
alert("Your Order is sucessfully placed")

}else{
    alert("Please enter Coreect otp")
}
}




}