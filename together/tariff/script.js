function calculateTax() {
  // ดึงค่าจากฟอร์ม
  let carPrice = parseFloat(document.getElementById("carPrice").value);
  let taxRate = parseFloat(document.getElementById("taxRate").value);

  // ตรวจสอบค่าที่กรอก
  if (isNaN(carPrice) || isNaN(taxRate) || carPrice <= 0 || taxRate <= 0) {
      document.getElementById("result").innerHTML = "กรุณากรอกข้อมูลให้ถูกต้อง!";
      document.getElementById("result").style.color = "red";
      return;
  }

  // คำนวณภาษี
  let taxAmount = (carPrice * taxRate) / 100;
  let totalAmount = carPrice + taxAmount;

  // แสดงผล
  document.getElementById("result").innerHTML = "ภาษีที่ต้องชำระ: " + taxAmount.toFixed(2) + " บาท<br>ราคารวมหลังภาษี: " + totalAmount.toFixed(2) + " บาท";
  document.getElementById("result").style.color = "#333";
}
