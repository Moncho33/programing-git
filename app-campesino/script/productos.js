// Verificamos si hay sesión
const usuario = localStorage.getItem("usuarioLogueado");

if (!usuario) {
    // Si no hay sesión, vuelve al login
    window.location.href = "login.html";
}

// Botón cerrar sesión
const btnCerrar = document.getElementById("cerrarSesion");

btnCerrar.addEventListener("click", function () {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "login.html";
});

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // leemos lo guardado en carrito

    let producto = carrito.find(p => p.nombre === nombre);//buscamos si el producto existe

    if (producto) { 
        producto.cantidad += 1; // si existe gusrdamos cantidad
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1 // si no existe lo agragamos con cantido 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)); // guardamos todo el carrito
      //localStorage.removeItem("carrito"); // para borrar todo lo del carrito, por  ahora para pruevas
    alert("Producto agregado");
    console.log(carrito);
}



