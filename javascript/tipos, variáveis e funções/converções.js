// tipo de dado
// booleano

// converção implicita
const numero = 10;
const numeroString = "10";

console.log(numero == numeroString); // true
console.log(numero + numeroString); // "1010"

// converção explícita
// Number() -> converte para number
// String() -> converte para string

console.log(Number(numeroString) + numero); // 20
console.log(String(numero) + numeroString); // "1010"

// NaN
console.log(Number("texto")); // NaN
