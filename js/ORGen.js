function generateQRCode() {
    let text = document.getElementById("text").value;
    let imageUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + text;
    let image = document.getElementById("qrcode");
    let textElement = document.getElementById("text");

    if (text.length > 0) {
        image.src = imageUrl;
    } else {
        textElement.classList.add('error');
        setTimeout(() => {
            textElement.classList.remove('error');
        }, 1000);
    }
}