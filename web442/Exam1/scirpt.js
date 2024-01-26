let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let hightscore = 0;

// console.log(document.querySelector("message").textContent);
// document.querySelector("message").textContent = "ว้าา แพ้อีกละ";
// document.querySelector(".guess").value = 15;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", () => {
  const userNumber = document.querySelector(".guess").value;
  if (userNumber == machineNumber) {
    document.querySelector(".secret").textContent = machineNumber;
    document.querySelector(".message").textContent = "ชนะแล้วว";
    if (document.querySelector(".hightscore").textContent < score) {
      document.querySelector(".hightscore").textContent = score;
    }
  } else {
    if (score != 0) {
      score--;
      document.querySelector(".score").textContent = score;
      if (userNumber < machineNumber) {
        document.querySelector(".message").textContent = "น้อยไป";
      } else if (userNumber > machineNumber) {
        document.querySelector(".message").textContent = "มากไป";
      }
    } else {
      document.querySelector(".message").textContent = "กด Reset เถอะ";
    }
  }
});
document.querySelector(".Reset").addEventListener("click", () => {
  machineNumber = Math.ceil(Math.random() * 21);
  score = 10;
  console.log(`machineNumber is  ${machineNumber}`);
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".message").textContent = "เอาเลขนี้แหละ";
  document.querySelector(".score").textContent = score;
});
