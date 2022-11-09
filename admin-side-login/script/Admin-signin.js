let button = document.getElementById("submit");
button.onclick = () => {
  let inputEmail = document.getElementById("email").value;
  let inputPass = document.getElementById("password").value;
  validate(inputEmail, inputPass);
  console.log(inputEmail, inputPass);
};

let sendData = async () => {
  const MailId = "sarfrajahmadraza@gmail.com";
  let Pass = "Sarfraj@123";
  let dataToSend = {
    MailId,
    Pass,
  };
  let promise = await fetch("http://localhost:3000/Admin-Details", {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const validate = async (mail, pass) => {
  let MailId;
  let Pass;
  let promise = await fetch("http://localhost:3000/Admin-Details");
  let data = await promise.json();
  data.forEach((el) => {
    MailId = el.MailId;
    Pass = el.Pass;
  });
  let DetailsArrAdmin = [MailId, Pass];
  if (mail == MailId) {
    if (pass == Pass) {
      alert("login Sucessfull");
      sessionStorage.setItem("Admin-login", JSON.stringify(DetailsArrAdmin));
      location.href = "../admin_side/dashboard.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Invalid Email");
  }
};

let resetPass = document.getElementById("resetPassword");
resetPass.onclick = async () => {
  let inputEmail = window.prompt("Enter UserID");
  if (inputEmail == "sarfrajahmadraza@gmail.com") {
    let inputPass = window.prompt("Enter New Password");
    if (inputPass == null) {
      return;
    }
    let dataToSend = {
      Pass: inputPass,
    };
    let promise = await fetch("http://localhost:3000/Admin-Details/1", {
      method: "PATCH",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Password Reset Successfull");
  } else {
    alert("Invalid UserID");
  }
};
