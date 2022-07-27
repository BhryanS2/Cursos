// listas condicionais
const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais"
);

const idadeComprador = 15;

if (idadeComprador >= 18) {
  console.log("comprou");
  listaDeDestinos.splice(2, 1);
} else {
  console.log("Menor de idade");
}
