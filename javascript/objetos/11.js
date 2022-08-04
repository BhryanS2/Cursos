const clientes = [
  {
    nome: "Luffy",
    cpf: "123.456.789-10",
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
  },
  {
    nome: "Zoro",
    cpf: "987.654.321-10",
    dependentes: [
      {
        nome: "Nami",
        parentesco: "Irmã",
        dataNascimento: "01/01/2000",
      },
      {
        nome: "Usopp",
        parentesco: "Irmão",
        dataNascimento: "01/01/2001",
      },
    ],
  },
  {
    nome: "Sanji",
    cpf: "654.321.987-10",
    dependentes: [
      {
        nome: "Chopper",
        parentesco: "Irmão",
        dataNascimento: "01/01/2000",
      },
      {
        nome: "Brook",
        parentesco: "Irmão",
        dataNascimento: "01/01/2001",
      },
    ],
  },
];

const listaDependentesSpread = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
  ...clientes[2].dependentes,
];
console.log("spread operator");

console.table(listaDependentesSpread);

const listaDependentesReduce = clientes.reduce((acumulador, cliente) => {
  return [...acumulador, ...cliente.dependentes];
}, []);

console.log("reduce");
console.table(listaDependentesReduce);
