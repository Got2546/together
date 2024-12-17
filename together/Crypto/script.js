// อัตราการแลกเปลี่ยน (ตัวอย่าง)
const cryptoRates = {
  btc: 1000000, // 1 BTC = 1,000,000 บาท
  eth: 30000,   // 1 ETH = 30,000 บาท
  xrp: 20       // 1 XRP = 20 บาท
};

function calculateCrypto() {
  const amount = document.getElementById("amount").value;
  const crypto = document.getElementById("crypto").value;
  
  if (amount === "") {
      document.getElementById("cryptoAmount").innerText = "กรุณาใส่จำนวนเงิน";
      return;
  }

  const rate = cryptoRates[crypto];
  const cryptoAmount = (amount / rate).toFixed(6);  // คำนวณจำนวนคริปโต
  document.getElementById("cryptoAmount").innerText = `จำนวนที่คุณสามารถซื้อได้: ${cryptoAmount} ${crypto.toUpperCase()}`;
}
