let codigos = ["A-10", "C-30", "B-20", "D-40"];

console.log("Lista inicial:", codigos);

codigos.sort();
console.log("Lista ordenada:", codigos);

codigos.splice(2, 1);
console.log("Después de eliminar C-30:", codigos);

codigos.unshift("X-99");
console.log("Después de agregar X-99 al inicio:", codigos);

codigos.reverse();
console.log("Lista final invertida:", codigos);
