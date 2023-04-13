function generateQRCode() {
  var qrCodeText = document.getElementById("qrCodeText").value;
  var qrCodeImage = document.getElementById("qrCodeImage");

  if (qrCodeText.trim() === "") {
    alert("Please enter text to generate QR code.");
    return;
  }

  qrCodeImage.innerHTML = "";
  var qrCode = new QRCode(qrCodeImage, {
    text: qrCodeText,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  qrCodeImage.style.display = "flex";
  qrCodeImage.style.margin = "auto";
}
