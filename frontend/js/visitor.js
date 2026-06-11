const API = "http://127.0.0.1:5000/api";

document.getElementById("submitBtn").addEventListener("click", async () => {
    const name    = document.getElementById("name").value.trim();
    const phone   = document.getElementById("phone").value.trim();
    const vehicle = document.getElementById("vehicle").value.trim().toUpperCase();
    const alert   = document.getElementById("alert");

    if (!name || !phone || !vehicle) {
        showAlert(alert, "error", "Please fill in all fields.");
        return;
    }

    const token = localStorage.getItem("token");

    try {
        // 1. Save visitor to DB
        const visRes  = await fetch(`${API}/visitor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ name, phone, vehicle })
        });
        const visitor = await visRes.json();
        if (!visRes.ok) throw new Error(visitor.error || "Failed to save visitor");

        // 2. Generate QR code
        const qrRes  = await fetch(`${API}/qr/generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ visitorName: name, phone, vehicleNumber: vehicle, visitorId: visitor._id })
        });
        const qrData = await qrRes.json();
        if (!qrRes.ok) throw new Error(qrData.error || "Failed to generate QR");

        // 3. Store QR and visitor info, go to QR page
        sessionStorage.setItem("qrImage",   qrData.qr);
        sessionStorage.setItem("visitorInfo", JSON.stringify({ name, phone, vehicle }));
        window.location.href = "qr.html";

    } catch (err) {
        showAlert(alert, "error", err.message);
    }
});

function showAlert(el, type, msg) {
    el.className = `alert ${type}`;
    el.textContent = msg;
}
