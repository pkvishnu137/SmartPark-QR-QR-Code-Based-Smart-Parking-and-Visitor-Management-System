const API = "http://127.0.0.1:5000/api";

document.getElementById("loginBtn").addEventListener("click", async () => {
    const email    = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const alert    = document.getElementById("alert");

    if (!email || !password) {
        showAlert(alert, "error", "Please fill in all fields.");
        return;
    }

    try {
        const res  = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Login failed");

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
