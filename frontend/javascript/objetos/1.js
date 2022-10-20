// objetos

// -> objetos são dinamicos
// -> objetos são mutáveis
// -> objetos são coleções de chaves e valores

const listaCPFs = [
  "123.456.789-10",
  "123.456.789-11",
  "123.456.789-12",
  "123.456.789-13",
]; // array de strings

const clientes = {
  nome: "Luffy",
  idade: 20,
  cpf: "123.456.789-10",
  arrayDeTelefone: ["(99) 99999-9999", "(88) 88888-8888", "(77) 7777-7777"],
  functionGetCPF() {
    return this.cpf;
  },
}; // objeto
