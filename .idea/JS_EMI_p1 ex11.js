// EX-11: Declara una variable undefined i un null. Què passa si els sumes?

var valorUndefined = undefined;
var valorNull = null;
var sumaValores = valorUndefined + valorNull;

console.log("Suma: ", sumaValores); // Mostra NaN.
