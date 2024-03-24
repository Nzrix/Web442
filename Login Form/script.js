const account1 = {
  owner: "Prayuth Snow",
  user: "yuth",
  psw: "1111",
};
const account2 = {
  owner: "Lisa Lazoo",
  user: "lisa",
  psw: "abcd",
};

const accounts = [account1, account2];
  // ใช้คำสั่ง find หา lisa แล้วค่อยหาตาม username

const btnLogin = document.querySelector(".login_btn");
const inputLoginUser = document.querySelector(".login_input--user");
const inputLoginPsw = document.querySelector(".login_input--psw");
const lblWelcome = document.querySelector(".welcome");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const user = inputLoginUser.value;
  const psw = inputLoginPsw.value;

  if (user === "admin" && psw === "1234") {
    lblWelcome.textContent = `Welcome ${user}`;
  }
});
