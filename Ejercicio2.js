let tareas = ["Revisar emails"];

console.log("Pila inicial:", tareas);

tareas.unshift("Llamar al cliente");
console.log("Después añadir 'Llamar al cliente':", tareas);

tareas.unshift("Preparar reporte");
console.log("Después añadir 'Preparar reporte':", tareas);

tareas.shift();
console.log("Después completar 'Preparar reporte':", tareas);

tareas.shift();
console.log("Después completar 'Llamar al cliente':", tareas);