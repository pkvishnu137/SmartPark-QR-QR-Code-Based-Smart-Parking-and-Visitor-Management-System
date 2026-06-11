// Reads QR data that visitor.js stored in sessionStorage and displays it
window.addEventListener("DOMContentLoaded", () => {
    const qrImage   = sessionStorage.getItem("qrImage");
    const infoRaw   = sessionStorage.getItem("visitorInfo");

    if (!qrImage) {
        document.getElementById("visitorInfo").textContent = "No QR data found. Please add a visitor first.";
        return;
    }

    document.getElementById("qrImage").src = qrImage;

    if (infoRaw) {
        const info = JSON.parse(infoRaw);
        document.getElementById("visitorInfo").innerHTML =
            `<strong>${info.name}</strong> &nbsp;|&nbsp; ${info.phone} &nbsp;|&nbsp; ${info.vehicle}`;
    }
});
