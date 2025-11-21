let carrito = [];

console.log("Carrito inicial:", carrito);

carrito.push("Camisa", "Pantalón");

console.log("Después de añadir Camisa y Pantalón:", carrito);

carrito.unshift("Zapatos");

console.log("Después de añadir Zapatos al inicio:", carrito);

carrito.splice(1, 1);

console.log("Después de eliminar Camisa:", carrito);