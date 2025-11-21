let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

console.log("Cola inicial:", colaImpresion);

colaImpresion.shift();
console.log("Después de imprimir el primer documento:", colaImpresion);

colaImpresion.push("doc4.txt");
console.log("Después de añadir 'doc4.txt':", colaImpresion);

colaImpresion.shift();
console.log("Después de imprimir el siguiente documento:", colaImpresion);