document.querySelector('#show-login').addEventListener('click',function(){

    document.querySelector(".popup" ).classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){

    document.querySelector(".popup" ).classList.remove("active");

})


 function openForm() {
    document.querySelector(".popup" ).classList.remove("active");
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



  document.querySelector(".form-popup .close").addEventListener("click",function(){

    document.getElementById("myForm").style.display = "none";

});
let  createData=document.getElementById("createData")

createData.onclick=(event)=>{
  event.preventDefault()
join();

}
let arr=[];
async function join(){

  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;

  let email=document.getElementById("input_email").value;
  let password=document.getElementById("input_password").value;
let number=document.getElementById("number").value;
console.log(firstname,lastname,email,password,number)

if(firstname.value===""||lastname.value==="" ||email.value===""||password.value===""){
  alert("please fill all the details")
}else{



let obj={

  firstname,
  lastname,
  email,
  password,
}

let res=await fetch("http://localhost:3000/user_login_details",{
  method:"POST",

  body:JSON.stringify(obj),
  headers:{

    'Content-Type':"application/json",
  }

})
let data=await res.json();
console.log("data",data);


// arr.push(obj);
// console.log(arr)
// let key =JSON.stringify(arr)
// localStorage.setItem("loginData",key);


}
}

let signData=document.getElementById("signData")

signData.onclick=()=>{
  getData();
  
}





const getData=async()=>{

  let res=await fetch("http://localhost:3000/user_login_details")

  let data=await res.json()
   loginForm(data)
   
   
   console.log(data)
}




 function loginForm(data) {
//   alert("hello")
let flag=false
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
data.forEach(function(el){
 
if(el.email==email && password==el.password) {
  flag=true;
  
}


})
if(flag==true){
  alert("Login Sucessful")
 
  
  }else{
    alert("Wrong Credentials")
  
  
  }
}

const getForgotData=async()=>{

  let res=await fetch("http://localhost:3000/user_login_details")

  let data=await res.json()

   
   forgotPassword(data)
   console.log(data)
}




let forgot =document.getElementById("forgot");
forgot.onclick=()=>{


getForgotData();
}

const forgotPassword=async(data)=>{
let flag=false
let id;
let email_id=prompt("Please enter your email id");

data.forEach(function(el){
if(el.email===email_id){

  flag=true
   id =el.id
}


})
if(flag==true){

console.log(id)
let new_password=prompt("Please enter your new password")

let obj={
  password:new_password,
}
let res=await fetch(`http://localhost:3000/user_login_details/${id}`,{

method:"PATCH",
body:JSON.stringify(obj),
headers:{

  'Content-Type':'application/json',
},

})
let res_data=await res.json()
console.log("data",res_data)

}else{

  alert("Please Enter right email id")
}

}