// 1.- Mostra per consola el teu nom, cognoms i any de naixement utilitzant diferents missatges de consola.
console.log("Eric")
console.warn("Munt Imbriano")
console.error("1-12-2005")

// 2.-  Declara 3 variables, cadascuna amb un tipus de dades diferent i mostra el valor per consola.
let nom = "Vinland";
let edat = 18;
let esViking = true;

console.log(nom);
console.log(edat);
console.log(esViking);

// 3.- Mostra una variable per consola que hagis declarat posteriorment amb var. Què apareix? I si canvies la declaració a let ?
console.log(missatgeVar);
var missatgeVar = "Hola!";
    // apareix com undefined a causa del "hoisting".

/*
console.log(missatgeLet);
let missatgeLet = "Hola!";
*/
    // surt un error perque LET no es "hoisted" de la mateixa manera.

    // "HOISTING" amb VAR permet que es declari una variable posteriorment sense error,
    // pero el seu valor sera "UNDEFINED" fins que es defineixi.


// 4.- Declara una variable amb un valor i mostra’l per consola. Modifica el seu valor a un altre tipus de dades. Et deixa? Perquè?
let exemple = 25;
console.log(exemple); // Mostra: 25
exemple = "canvi a text";
console.log(exemple); // Mostra: "canvi a text"
// Sí que et deixa perquè let permet modificar el tipus de dades de la variable.


// 5.- Declara una constant amb un valor i mostra’l per consola. Modifica el seu valor a un altre tipus de dades. Et deixa? Perquè?
const exempleConst = 42;
console.log(exempleConst); // Mostra: 42
exempleConst = "nou valor"; // Error: No es pot modificar el valor d'una constant
// No et deixa perquè const no permet que es canviï el valor una vegada assignat.
