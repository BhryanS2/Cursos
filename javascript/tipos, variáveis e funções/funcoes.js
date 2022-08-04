// declaração de função
function printTexto(texto = "") {
  console.log(texto);
}

printTexto("Hello");
printTexto("World");

// sem parametros
function somaSemParametro() {
  return 1 + 1;
}

// declaração de função com retorno
function soma(a, b) {
  return a + b;
}

// função closure
function somaClosure(a, b) {
  return function () {
    return a + b;
  };
}

somaClosure(1, 2)();

// função anonima
const somaAnonima = function (a, b) {
  return a + b;
};

// função arrow
const somaArrow = (a, b) => a + b;

// função arrow com retorno
const somaArrowRetorno = (a, b) => {
  return a + b;
};

// função arrow com retorno e sem parametros
const somaArrowRetornoSemParametro = () => 1 + 1;

// função auto chamada
(function () {
  console.log("Função auto chamada");
})();
