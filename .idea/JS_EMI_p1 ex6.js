// EX-6: Donats un number i un BigInt  ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta,
// divisió i multiplicació i mostra els resultats amb un sol decimal.

var numero = 1.234;
var bigInt = 5678n;

var suma = numero + Number(bigInt);
var resta = numero - Number(bigInt);
var multiplicacion = numero * Number(bigInt);
var division = numero / Number(bigInt);

console.log("Suma: ", suma.toFixed(1));
console.log("Resta: ", resta.toFixed(1));
console.log("Multiplicación: ", multiplicacion.toFixed(1));
console.log("Division: ", division.toFixed(1));
