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

let relatorio = "";
// percorendo um objeto
for (const chave in cliente) {
  if (
    typeof cliente[chave] === "object" ||
    typeof cliente[chave] === "function"
  ) {
    continue;
  }
  relatorio += `${chave}: ${cliente[chave]}\n`;
}

console.log(relatorio);
