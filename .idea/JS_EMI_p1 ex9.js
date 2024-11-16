// EX-9: Donat un String amb el teu nom i cognoms, extreu el teu primer cognom,
// i mostra’l per pantalla indicant el número de caràcters que té.

var nombreCompleto = "Joaquín Domínguez Portela";
var partes = nombreCompleto.split(" ");
var primerApellido = partes[1];

console.log("Primer apellido: ", primerApellido); // hauria de sortir Domínguez.
console.log("Número de caracteres: ", primerApellido.length); // hauria de surtir 9.
