window.addEventListener("DOMContentLoaded", () => {
    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 280, height: 280 } },
        (decodedText) => {
            html5QrCode.stop();
            showResult(decodedText);
        },
        (errorMessage) => { /* ignore scan errors */ }
    ).catch(err => {
        document.getElementById("reader").innerHTML =
            `<p style="color:#b91c1c;text-align:center;">Camera error: ${err}</p>`;
    });
});

function showResult(text) {
    try {
        const data = JSON.parse(text);
        const box  = document.getElementById("scan-result");
        box.style.display = "block";

        document.getElementById("resultBody").innerHTML = Object.entries(data).map(([k, v]) => `
            <tr>
                <th style="padding:10px 16px;text-align:left;color:#64748b;text-transform:capitalize;">${k}</th>
                <td style="padding:10px 16px;">${v}</td>
            </tr>
        `).join("");
    } catch {
        document.getElementById("scan-result").style.display = "block";
        document.getElementById("resultBody").innerHTML =
            `<tr><td>${text}</td></tr>`;
    }
}
