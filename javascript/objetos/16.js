// orientação a objetos js
// a orientação a obj no js é uma sugar syntax para criar objetos
class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  exibirSaldo() {
    return `O saldo atual é de ${this.saldo}`;
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const cliente = new ClientePoupanca(
  "Kakashi",
  "kakashi@k.com",
  "123.456.789-00",
  100,
  200
);

console.log(cliente);

cliente.depositar(100);
cliente.depositarPoupanca(150);

console.log(cliente);
