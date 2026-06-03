/*let listaPedidos = document.getElementById("listaPedidos");
let detallePedido = document.getElementById("detallePedido");

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

pedidos.forEach((pedido, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
        <strong>Pedido #${index + 1}</strong><br>
        Fecha: ${pedido.fecha}<br>
        Total: $${pedido.total}<br>
    `;

    let btnVer = document.createElement("button");
    btnVer.textContent = "Ver detalle";

    btnVer.addEventListener("click", () => {
        mostrarDetalle(pedido);
    });

    li.appendChild(btnVer);
    listaPedidos.appendChild(li);
});

function mostrarDetalle(pedido) {
    detallePedido.innerHTML = "<h3>D$etalle del pedido</h3>";

    pedido.productos.forEach(p => { 
        let pTag = document.createElement("p");
        pTag.textContent = `${p.nombre} - ${p.cantidad} x $${p.precio}`;
        detallePedido.appendChild(pTag);
    });

    let total = document.createElement("strong");
    total.textContent = `Total: $${pedido.total}`;
    detallePedido.appendChild(total);
}*/
const pedido = JSON.parse(localStorage.getItem("pedidoSeleccionado"));

const lista = document.getElementById("detalleLista");
const totalTexto = document.getElementById("totalPedido");
const titulo = document.getElementById("tituloPedido");
const estadoTexto = document.getElementById("estadoPedido");


if (!pedido) {
    titulo.textContent = "No hay pedido seleccionado";
} else {
    titulo.textContent = `Pedido del ${pedido.fecha}`;

    pedido.productos.forEach(p => {

        let li = document.createElement("li");
        let subtotal = p.precio * p.cantidad;
    
        estadoTexto.textContent = `Estado del pedido: ${pedido.estado}`;

        li.innerHTML = `
            <strong>${p.nombre}</strong><br>
            ${p.cantidad} × $${p.precio} = <strong>$${subtotal}</strong>
        `;

        lista.appendChild(li);
    });

    totalTexto.textContent = `Total pagado: $${pedido.total}`;
}

const btnEntregado = document.getElementById("btnEntregado");

btnEntregado.addEventListener("click", () => {
    pedido.estado = "Entregado";

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    pedidos = pedidos.map(p =>
        p.fecha === pedido.fecha ? pedido : p
    );

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    estadoTexto.textContent = `Estado del pedido: ${pedido.estado}`;
    alert("Pedido marcado como entregado ✅");
});
