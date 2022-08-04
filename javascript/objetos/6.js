const cliente = {
  nome: "Luffy",
  idade: 20,
  cpf: "123.456.789-10",
  arrayDeTelefone: ["(99) 99999-9999", "(88) 88888-8888", "(77) 7777-7777"],
};

cliente.dependentes = {
  nome: "Ace",
  parentesco: "Irmão",
  dataNascimento: "01/01/2000",
};

console.log(cliente);

// alterando um elemento dentro de um objeto

cliente.dependentes.nome = "Ace punhos de fogo";
