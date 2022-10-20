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
  ],
};

// adicionando
cliente.dependentes.push({
  nome: "Sabo",
  parentesco: "Irmão",
  dataNascimento: "01/01/2001",
});

const dependenteMainNovo = cliente.dependentes.filter((dependente) => {
  return dependente.dataNascimento === "01/01/2001";
});

console.log(dependenteMainNovo[0]);
