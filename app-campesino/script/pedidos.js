const listaPedidos = document.getElementById("listaPedidos");
const mensaje = document.getElementById("mensaje");

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

if (pedidos.length === 0) {
    mensaje.textContent = "No tienes pedidos registrados 📦";
} else {
    pedidos.forEach((pedido, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
    <strong>Pedido #${index + 1}</strong>
    <br>Total: $${pedido.total}
    <br>Estado: <strong>${pedido.estado}</strong>
    <br>Fecha: ${pedido.fecha}
`;


        let btnVer = document.createElement("button");
        btnVer.textContent = "Ver detalle";

        btnVer.addEventListener("click", () => {
            localStorage.setItem("pedidoSeleccionado", JSON.stringify(pedido));
            window.location.href = "detallePedido.html";
        });

        li.appendChild(btnVer);
        listaPedidos.appendChild(li);
    });
}
