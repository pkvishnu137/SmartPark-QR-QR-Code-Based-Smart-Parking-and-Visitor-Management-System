const API = "http://127.0.0.1:5000/api";

window.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) { window.location.href = "login.html"; return; }

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "login.html";
    });

    try {
        const res  = await fetch(`${API}/visitor`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        const visitors = await res.json();
        if (!res.ok) throw new Error("Failed to load visitors");

        const active = visitors.filter(v => v.status === "Active");
        document.getElementById("totalVisitors").textContent  = visitors.length;
        document.getElementById("activeVisitors").textContent = active.length;

        const tbody = document.getElementById("visitorTable");
        if (visitors.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#94a3b8;">No visitors yet.</td></tr>`;
            return;
        }

        tbody.innerHTML = visitors.map(v => `
            <tr>
                <td>${v.visitorName}</td>
                <td>${v.phone || "—"}</td>
                <td>${v.vehicleNumber || "—"}</td>
                <td>${new Date(v.arrivalTime).toLocaleString()}</td>
                <td><span class="badge ${v.status === "Active" ? "active" : "expired"}">${v.status}</span></td>
            </tr>
        `).join("");
    } catch (err) {
        console.error(err);
    }
});
