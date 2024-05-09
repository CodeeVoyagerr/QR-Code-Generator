document.addEventListener("DOMContentLoaded",function(){
    // Sayfa tamamen yüklendiğinde çalışacak kodlar

    const generateButton = document.getElementById("generate-btn");
    const saveButton = document.getElementById("save-btn");
    const qrCodeContainer =document.getElementById("qr-code");

    let qrCodeInstance = null;

    generateButton.addEventListener("click",function(){
        // Butona tıkladığında QR oluşacak.

        // Kullanıcının girdiği metin veya url
        let qrText = document.getElementById("qr-text").value;

        if(qrCodeInstance){
            qrCodeInstance.clear(); // Önceki QR kodu temizle
            qrCodeInstance = null; // QR koda boş ata
            qrCodeContainer.innerHTML = ""; // QR Kod kenteynerını temizle
        }
        if(qrText){
            // Kullanıcının girdiği metin veya url boş değilse
            // QR Kod oluşturacak

            qrCodeInstance = new QRCode(qrCodeContainer, {
                text : qrText,
                width : 128,
                heigh : 128,

            });

            // QR kodun animasyonlu görünmesini sağlar
            qrCodeContainer.style.opacity = "1";
            qrCodeContainer.style.transform = "scale(1)";
        }
    });

    saveButton.addEventListener("click",function(){
        // Kaydet tuşuna tıklandığında çalışacak kodlar

        if(qrCodeInstance){
            // QR kod oluşturulmuşsa çalışacak kodlar
            const qrImageData = qrCodeInstance._el
                .querySelector("img")
                .getAttribute("src");
            const link = document.createElement("a");
            link.href = qrImageData;
            link.download = "qr-code.png";
            link.click();
        }
    })
});