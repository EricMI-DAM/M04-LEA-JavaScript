// EX-14: Realitza una coerció explícita i implícita d’un booleà a Number.

var booleano14 = false;

var booleanoComoNumero = Number(booleano14);
console.log("Booleano a Number (explícita): ", booleanoComoNumero);

var booleanoComoNumero2 = booleano * 1;
console.log("Booleano a Number (implícita): ", booleanoComoNumero2);
