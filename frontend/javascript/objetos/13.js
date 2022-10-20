// cliente genérico
function Cliente(nome = "", cpf = "", email = "", saldo = 0) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = (valor) => (this.saldo += valor);
  this.sacar = (valor) => (this.saldo -= valor);
}

const cliente1 = new Cliente("João", "123.456.789-00", "j@j.com", 100);
// Cliente 1 no primeiro nível do prototype é protótipo de Cliente, no segundo nível é protótipo de Object, no terceiro nível é protótipo de Function.
console.log(cliente1);
