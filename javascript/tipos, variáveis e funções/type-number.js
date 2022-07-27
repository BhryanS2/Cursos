//  tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero; // 3
const subtracao = primeiroNumero - segundoNumero; // -1
const multiplicacao = primeiroNumero * segundoNumero; // 2
const divisao = primeiroNumero / segundoNumero; // 0.5
const modulo = primeiroNumero % segundoNumero; // 1

// ponto flutante
const numeroPontoFlutante = 3.14;
const pontoFlutuanteSemZero = 0.2;

const novaOperacao = numeroPontoFlutante + pontoFlutuanteSemZero; // 3.34

// NaN -> Not a Number -> não é um número
const numeroInvalido = "3a";
const operacaoInvalida = numeroInvalido * 3; // NaN
console.log(operacaoInvalida);
