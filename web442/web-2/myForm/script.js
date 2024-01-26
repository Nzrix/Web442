const form = document.getElementById("myForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPassword(password, confirm);
});

const checkPassword = (password, confirm) => {
  if (password !== confirm) {
    const formConfirm = confirm.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = "Not Correct Password";
  }
};
