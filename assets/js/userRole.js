$(document).ready(function () {
  const secretKey = decryptKey();
const encryptedData = localStorage.getItem("role");
let role = null;

if (encryptedData) {
    try {
        const decryptedData = JSON.parse(
            CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8)
        );
        console.log(decryptedData);
          
        role = decryptedData || null;
    } catch (err) {
        console.error("Error decrypting user data:", err);
    }
}
})