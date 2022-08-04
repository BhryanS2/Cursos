// prototype
// execute no console do navegador
// prototype é a biblioteca que permite a criação de estruturas de dados.
(() => {
  const array = [1, 2, 3, 4, 5];
  const obj = { a: 1 };
  const str = "string";
  const num = 1;
  const bool = true;
  const func = () => {};
  console.log(array.__proto__);
  console.log(obj.__proto__);
  console.log(str.__proto__);
  console.log(num.__proto__);
  console.log(bool.__proto__);
  console.log(func.__proto__);
})();

// prototype nada mais é que um construtor de objetos.
// prototype é um objeto que é herdado por todos os objetos que serão criados.
