// ===============================
// VARIABLES GLOBALES
// ===============================

// Leemos el carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Referencias al HTML
let lista = document.getElementById("listaCarrito");
let totalTexto = document.getElementById("total");
let mensajeVacio = document.getElementById("mensajeVacio");
let btnFinalizar = document.getElementById("btnFinalizar");

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================

function renderCarrito() {
    // Limpiamos pantalla
    lista.innerHTML = "";
    totalTexto.textContent = "";
    mensajeVacio.textContent = "";

    // Si el carrito está vacío
    if (carrito.length === 0) {
        mensajeVacio.textContent = "Tu carrito está vacío 🧺";
        totalTexto.textContent = "Total: $0";
        btnFinalizar.disabled = true;

        return;
    }

    let total = 0;

    // Recorremos productos
    carrito.forEach(producto => {
        let li = document.createElement("li");

        let subtotal = producto.precio * producto.cantidad;

        // Información del producto
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio unitario: $${producto.precio}<br>
            Cantidad: ${producto.cantidad}<br>
            Subtotal: $${subtotal}
        `;

        // Botones
        let btnMas = document.createElement("button");
        btnMas.textContent = "+";

        let btnMenos = document.createElement("button");
        btnMenos.textContent = "-";

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        // Evento +
        btnMas.addEventListener("click", () => {
            producto.cantidad += 1;
            guardarYRenderizar();
        });

        // Evento -
        btnMenos.addEventListener("click", () => {
            if (producto.cantidad > 1) {
                producto.cantidad -= 1;
            } else {
                carrito = carrito.filter(p => p.nombre !== producto.nombre);
                btnFinalizar.disabled = false;

            }
            guardarYRenderizar();
        });

        // Evento eliminar
        btnEliminar.addEventListener("click", () => {
            carrito = carrito.filter(p => p.nombre !== producto.nombre);
            guardarYRenderizar();
        });

        // Agregamos botones al li
        li.appendChild(btnMenos);
        li.appendChild(btnMas);
        li.appendChild(btnEliminar);

        // Agregamos li a la lista
        lista.appendChild(li);

        // Sumamos total
        total += subtotal;
    });

    // Mostramos total
    totalTexto.textContent = "Total: $" + total;
}

// ===============================
// GUARDAR Y VOLVER A DIBUJAR
// ===============================

function guardarYRenderizar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

// ===============================
// FINALIZAR COMPRA
// ===============================

btnFinalizar.addEventListener("click", () => {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let resumen = "CONFIRMAR PEDIDO\n\n?";
    //let total = 0;

    carrito.forEach(producto => {
        let subtotal = producto.precio * producto.cantidad;
        resumen += `${producto.nombre} x ${producto.cantidad} = $${subtotal}\n`;
        total += subtotal;
    });

    resumen += `\nTotal a pagar: $${total}`;

    let confirmar = confirm(resumen);

    if (confirmar) {

        let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let total = carrito.reduce((suma, p) => {
        return suma + (p.precio * p.cantidad);
    }, 0);

     let pedido = {
        fecha: new Date().toLocaleString(),
        productos: carrito,
        total: total,
        estado: "Pendiente"
    };

pedidos.push(pedido);
localStorage.setItem("pedidos", JSON.stringify(pedidos));

        alert("Pedido confirmado 🥕🌽\nGracias por comprar del campo");

        localStorage.removeItem("carrito");
        carrito = [];
        renderCarrito();
    }
});


// ===============================
// PRIMERA CARGA
// ===============================

renderCarrito();
