// EX-13: Realitza una coerció explícita i implícita d’un String a booleà.

var textoString = "Hola";

var textoComoBooleano = Boolean(textoString);
console.log("String a booleano (explícita): ", textoComoBooleano);
// hauria de surtir true, ja que l'string no esta buit.

if (texto) {
    console.log("String a booleano (implícita): ", true)
} else {
    console.log("String a booleano (implícita): ", false);
}
