// EX-12: Realitza una coerció explícita i implícita d’un booleà a String.

var booleano = true;

var booleanoComoString = String(booleano);
console.log("Booleano a String (explícita): ", booleanoComoString);

var booleanoComoString2 = booleano * "";
console.log("Booleano a String (implícita): ", booleanoComoString2);
