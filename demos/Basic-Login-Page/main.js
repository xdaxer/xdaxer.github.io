let userName = document.querySelector("#mail");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let output = document.querySelector("#output");
let clear = document.querySelector("#clear");
const SERVER_PASSWORD = "123";
const SERVER_USERNAME = "daxer";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  login();
});

clear.addEventListener("click", function () {
  output.textContent = "";
});

function login() {
  if (
    password.value === SERVER_PASSWORD &&
    userName.value === SERVER_USERNAME
  ) {
    output.innerHTML = "Başarılı";
    window.location.href = "/profile";
  } else {
    output.innerHTML = "Başarısız";
  }
} 
