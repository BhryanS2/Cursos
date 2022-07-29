const cliente = {
  nome: "Luffy",
  idade: 20,
  cpf: "123.456.789-10",
  arrayDeTelefone: ["(99) 99999-9999", "(88) 88888-8888", "(77) 7777-7777"],
  functionGetCPF() {
    return this.cpf;
  },
};

// acessando um valor por colchetes
console.log(`Meu nome é ${cliente["nome"]} e tenho ${cliente["idade"]} anos.`); // Meu nome é Luffy e tenho 20 anos.

const chaves = Object.keys(cliente);
chaves.forEach((chave) => {
  console.log(`${chave}: ${cliente[chave]}`);
});

const chaveNaoExistente = cliente["nomeDoCliente"];
console.log(chaveNaoExistente); // undefined
