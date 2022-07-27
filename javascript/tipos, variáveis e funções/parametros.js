function somaSemParametro() {
  return 1 + 1;
}

// numero1 e numero2 são parametros
function soma(numero1, numero2) {
  return numero1 + numero2;
}

// argumentos
console.log(soma(1, 2)); // 3

// funções por parametro | callbacks

function callback(numero1, numero2, fun) {
  return fun(numero1, numero2);
}

console.log(callback(1, 2, soma));

function multiplica(numero1, numero2) {
  return numero1 * numero2;
}

console.log(callback(2, 2, multiplica)); // 4
console.log(multiplica(soma(1, 2), soma(1, 2))); // 9
