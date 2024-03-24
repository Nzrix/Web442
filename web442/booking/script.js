document.getElementById("formData").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const seat = document.getElementById("seat").value;

  const formData = {
    name: name,
    date: date,
    time: time,
    seat: seat,
  };
  saveData(formData);
  displayData();
});

function saveData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  storedFormData.push(formData);

  localStorage.setItem("formData", JSON.stringify(storedFormData));
}

function displayData() {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];
  const displayContainer = document.getElementById("showData");
  displayContainer.innerHTML = "";

  storedFormData.forEach((formData, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Date:</strong> ${formData.date}</p>
      <p><strong>Time:</strong> ${formData.time}</p>
      <p><strong>Seat:</strong> ${formData.seat}</p>
    `;
    displayContainer.appendChild(div);
    displayData();
  });
  
}
