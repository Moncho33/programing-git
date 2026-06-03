// Intentamos traer el carrito desde localStorage
// Si no existe, usamos un array vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// =======================================
// DATOS DE LA APLICACIÓN (SIMULADOS)
// =======================================

// Lista de productos disponibles en la app
// Cada producto es un objeto con propiedades
// Creamos un array que contendrá todos los productos
// Un array es una lista
let productos = [
  {
    id: 1,                 // Identificador único del producto
    nombre: "Papa criolla",// Nombre del producto
    precio: 2500,          // Precio por kilo
    unidad: "kg",          // Unidad de venta
    imagen: "img/papa.jpg" // Ruta de la imagen
  },
  {
    id: 2,
    nombre: "Tomate chonto",
    precio: 3000,
    unidad: "kg",
    imagen: "img/tomate.jpg"
  }
];

// Carrito de compras (empieza vacío)
//let carrito = [];

// Agrega un producto al carrito usando su ID
function agregarAlCarrito(idProducto) {

  // Buscamos el producto por su id
  let producto = productos.find(p => p.id === idProducto);

  // Agregamos el producto encontrado al carrito
  carrito.push(producto);

  // Guardamos el carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mensaje para confirmar
  console.log("Producto agregado:", producto);
}

// Recorremos el carrito
carrito.forEach(producto => {
  console.log(producto.nombre, producto.precio);
});


// Muestra el contenido del carrito en consola
function verCarrito() {
    console.log("Carrito:", carrito);
}






function comprar() {
    alert("Producto agregado (simulación)");
}

function agregarCarrito() {
    alert("Producto agregado al carrito (simulación)");
}

function volver() {
    window.location.href = "index.html";
}
function irProducto() {
    window.location.href = "producto.html";
}
function irCarrito() {
    window.location.href = "carrito.html";
}

function finalizarCompra() {
    alert("Compra realizada con éxito (simulación)");
}

function seguirComprando() {
    window.location.href = "index.html";
}
