// listas
const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais"
);

console.table(listaDeDestinos);

listaDeDestinos.push("Curitiba");
console.table(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.table(listaDeDestinos);

console.log(listaDeDestinos[0]);
