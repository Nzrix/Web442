// เมื่อเรียกใช้งานฟังก์ชันนี้จะทำการบันทึกข้อมูลลงใน local storage
function saveData() {
  // รับค่าจากฟอร์ม
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var seat = document.getElementById('seat').value;

  // ตรวจสอบว่ามีข้อมูลใน local storage หรือยัง
  if(localStorage.getItem('bookings') === null) {
    // ถ้าไม่มีข้อมูลให้สร้าง array เปล่าขึ้นมา
    var bookings = [];
  } else {
    // ถ้ามีข้อมูลให้ดึงข้อมูลมาใช้งาน
    var bookings = JSON.parse(localStorage.getItem('bookings'));
  }

  // เพิ่มข้อมูลใหม่ลงใน array
  bookings.push({name: name, date: date, time: time, seat: seat});

  // บันทึกข้อมูลลงใน local storage ในรูปแบบของ JSON
  localStorage.setItem('bookings', JSON.stringify(bookings));

  // เรียกใช้ฟังก์ชันเพื่อแสดงข้อมูลที่บันทึกล่าสุด
  displayData();
}

// เมื่อเรียกใช้งานฟังก์ชันนี้จะทำการแสดงข้อมูลที่บันทึกใน local storage
function displayData() {
  var bookings = JSON.parse(localStorage.getItem('bookings'));
  var showData = document.getElementById('showData');
  showData.innerHTML = ''; // เคลียร์ข้อมูลเก่าทุกครั้งที่แสดง

  // ตรวจสอบว่ามีข้อมูลใน local storage หรือไม่
  if(bookings === null || bookings.length === 0) {
    showData.innerHTML = '<p>No bookings available</p>';
  } else {
    // แสดงข้อมูลที่บันทึกทั้งหมด
    bookings.forEach(function(booking) {
      showData.innerHTML += '<p>Name: ' + booking.name + ', Date: ' + booking.date + ', Time: ' + booking.time + ', Seat: ' + booking.seat + '</p>';
    });
  }
}

// เรียกใช้งานฟังก์ชัน displayData เพื่อแสดงข้อมูลที่บันทึกใน local storage ในขณะที่โหลดหน้าเว็บ
window.onload = displayData;
