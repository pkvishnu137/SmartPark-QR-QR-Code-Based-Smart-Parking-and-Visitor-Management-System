const API = "http://localhost:5000/api";

document.getElementById("registerBtn").addEventListener("click", async () => {
    const name     = document.getElementById("name").value.trim();
    const email    = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const alert    = document.getElementById("alert");

    if (!name || !email || !password) {
        showAlert(alert, "error", "Please fill in all fields.");
        return;
    }
    if (password.length < 6) {
        showAlert(alert, "error", "Password must be at least 6 characters.");
        return;
    }

    try {
        const res  = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Registration failed");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user",  JSON.stringify(data.user));

        window.location.href = "dashboard.html";
    } catch (err) {
        showAlert(alert, "error", err.message);
    }
});

function showAlert(el, type, msg) {
    el.className = `alert ${type}`;
    el.textContent = msg;
}
