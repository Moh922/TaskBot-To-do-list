function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "**Fill the password please!";
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  } else {
    alert("Password is correct");
  }
}

// Fecthing API for signup

const form = document.getElementById("form");
const submit = document.getElementById("submitBtn");

const handleSubmit = (e) => {
  e.preventDefault();
  var userName = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("https://url-shortener-bc.herokuapp.com/api/v1/users/signup", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      userName: userName,
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data != null){
         window.location.href = './login.html'
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
};

submit.addEventListener('click', (e) => handleSubmit(e));

//Fetch API for login

  
  const forml = document.getElementById("l-form");
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener('submit',  function(){
   e.preventDefault();

   const payload = new FormData(form)

   console.log([...payload])

   fetch('https://todo-app-bc.herokuapp.com/api/v1/users/login', {
      method: "POST",
      body: payload,

   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
  });
  window.location.href = './hompegae.html'
