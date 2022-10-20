// cliente genérico
function Cliente(nome = "", cpf = "", email = "", saldo = 0) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = (valor) => (this.saldo += valor);
  this.sacar = (valor) => (this.saldo -= valor);
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoupanca = saldoPoupanca;
}

const clientePoupanca = new ClientePoupanca(
  "João",
  "123.456.789-00",
  "a@a.com",
  100,
  200
);

console.log(clientePoupanca);

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
  this.saldoPoupanca += valor;
};

clientePoupanca.depositarPoupanca(10);

console.log(clientePoupanca.saldoPoupanca);
