let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

console.log("Lista inicial de productos:", productos);

productos.splice(2, 1, "Mouse Nuevo");
console.log("Después del reemplazo:", productos);