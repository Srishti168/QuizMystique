function sign_validate() {
  var er = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var pr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  var username = document.getElementById("signEmail");
  var password = document.getElementById("spassword");

  if (username.value == "" || password.value == "") {
    document.getElementById("sign_err").innerHTML = "Please Fill Data";
    
  } else if (!er.test(username.value)) {
    document.getElementById("sign_err").innerHTML = "Email is not Correct";
   
  } else if (!pr.test(password.value)) {
    document.getElementById("sign_err").innerHTML = "Password is not Correct";
   
  } else {
    document.getElementById("sign_err").innerHTML = " SignUp Successful";
    document.getElementById("sign_err").style.color = "darkgreen";
  }
}

function login_val() {
  var er = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var pr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  var username = document.getElementById("loginEmail");
  var password = document.getElementById("lpassword");
 
  if (username.value == "" || password.value == "") {
    document.getElementById("login_err").innerHTML = "Please Fill Data";
    
  } else if (!er.test(username.value)) {
    document.getElementById("login_err").innerHTML = "Email is not Correct";
    
  } else if (!pr.test(password.value)) {
    document.getElementById("login_err").innerHTML = "Password is not Correct";
    
  } else {
      document.getElementById("login_err").innerHTML = "";
      localStorage.setItem("active", username.value);
      location.href = "quiz.html";
    
  }
}

let login_flag = false;
function login_hide() {
  if (login_flag == false) {
    document.getElementById("l_icon").classList.remove("fa-eye-slash");
    document.getElementById("l_icon").classList.add("fa-eye");
    document.getElementById("lpassword").type = "text";
    login_flag = true;
  } else {
    document.getElementById("l_icon").classList.remove("fa-eye");
    document.getElementById("l_icon").classList.add("fa-eye-slash");
    document.getElementById("lpassword").type = "password";
    login_flag = false;
  }
}
let sign_flag = false;
function sign_hide() {
  if (sign_flag == false) {
    document.getElementById("s_icon").classList.remove("fa-eye-slash");
    document.getElementById("s_icon").classList.add("fa-eye");
    document.getElementById("spassword").type = "text";
    sign_flag = true;
  } else {
    document.getElementById("s_icon").classList.remove("fa-eye");
    document.getElementById("s_icon").classList.add("fa-eye-slash");
    document.getElementById("spassword").type = "password";
    sign_flag = false;
  }
}
