let email = document.getElementById("email");
let message = document.getElementById("error-message");
let form = document.getElementById("notification-form");

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

email.addEventListener('change', () => {
  if (email.value === null || email.value === "") {
    form.classList.add("error");
    message.innerText = "Whoops! It looks like you forgot to add your email";
  } else if (!validateEmail(email.value)) {
    form.classList.add("error");
    message.innerText = "Please provide a valid email address";
  } else {
    if (form.classList.contains("error")) {
      form.classList.remove("error")
    }
    message.innerText = "";
  }
});