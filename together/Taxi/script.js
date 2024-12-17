document.getElementById("taxi-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const distance = parseFloat(document.getElementById("distance").value);
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(distance) || isNaN(time)) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง!");
      return;
  }

  // ค่าโดยสารเบื้องต้น
  const baseFare = 35; // ค่ามิเตอร์เริ่มต้น (บาท)
  const farePerKm = 10; // ค่ามิเตอร์ต่อกิโลเมตร (บาท)
  const farePerMin = 2; // ค่ามิเตอร์รอ (บาทต่อนาที)

  // คำนวณค่าโดยสาร
  const totalFare = baseFare + (farePerKm * distance) + (farePerMin * time);

  // แสดงผล
  document.getElementById("totalFare").textContent = totalFare.toFixed(2);
});
