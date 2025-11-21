let parking = ["CarroA", "Libre", "Libre", "CarroB"];

console.log("Estado inicial del parking:", parking);

parking.shift();

console.log("Después de que CarroA se va:", parking);

parking.splice(0, 2, "MotoA", "MotoB");

console.log("Después de llegar las dos motos:", parking);