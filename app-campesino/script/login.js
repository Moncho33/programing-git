const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if (correo === "" || password === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    // Simulamos guardar sesión
    localStorage.setItem("usuarioLogueado", correo);

    // Redirigimos a productos
    window.location.href = "productos.html";
});
