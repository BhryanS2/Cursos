// listas condicionais
const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais"
);

const idadeComprador = 18;
const destido = "Minas Gerais";
const estaAcompanhada = false;
let temPassagemComprada = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

const destinoExiste = listaDeDestinos.includes(destido);

if (podeComprar && destinoExiste) {
  console.log("Pode comprar");
  temPassagemComprada = true;
} else {
  console.log("Não pode comprar");
}
