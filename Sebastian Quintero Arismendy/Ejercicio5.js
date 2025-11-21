let fila = ["Ana", "Luis", "Carlos", "Maria"];

console.log("Fila inicial:", fila);

fila.splice(1, 1); 
console.log("Luis se cansa y se va. Eliminado:",);
console.log("Fila ahora:", fila);

fila.splice(1, 0, "Jorge");
console.log("Jorge se cuela y se coloca en la posición 1.");
console.log("Fila final:", fila);
