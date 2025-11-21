let compras = ["Manzanas"];

console.log("Lista inicial:", compras);

compras.push("Leche", "Pan");
console.log("Después de push:", compras);

compras.unshift("Huevos");
console.log("Después de unshift:", compras);

compras.splice(1, 1);
console.log("Después de eliminar Manzanas:", compras);

console.log("Lista final:", compras);