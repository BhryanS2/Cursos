const cliente = {
  nome: "Luffy",
  idade: 20,
  cpf: "123.456.789-10",
  arrayDeTelefone: ["(99) 99999-9999", "(88) 88888-8888", "(77) 7777-7777"],
  dependentes: [
    {
      nome: "Ace",
      parentesco: "Irmão",
      dataNascimento: "01/01/2000",
    },
    {
      nome: "Sabo",
      parentesco: "Irmão",
      dataNascimento: "01/01/2001",
    },
  ],
  saldo: 100,
  depositar(valor) {
    this.saldo += valor;
  },
  sacar(valor) {
    this.saldo -= valor;
  },
};

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  // -> [ 'nome', 'idade', 'cpf', 'arrayDeTelefone', 'dependentes', 'saldo', 'depositar', 'sacar' ]
  if (propsClientes.includes("dependentes")) {
    console.log(`${obj.nome} recebeu oferta de seguro`);
  }
}

oferecerSeguro(cliente);

// objetos para array
const array = Object.entries(cliente);
console.log(array);
