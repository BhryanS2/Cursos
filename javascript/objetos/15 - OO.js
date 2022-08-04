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

const cliente = new Cliente(
  "Monkey D. Luffy",
  "luffy@one.piece",
  "123.456.789-00",
  100
);

console.log(cliente.exibirSaldo());
