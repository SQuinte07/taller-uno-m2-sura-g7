let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

console.log("Estado inicial de los asientos:", asientos);

asientos.fill("Reservado", 1, 4);

console.log("Estado final de los asientos:", asientos);