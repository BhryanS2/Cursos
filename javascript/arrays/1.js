// medias dos alunos
const notas = [10, 6.5, 8, 7.8];

// calcular a média das notas acessando o array
const mediaAcessandoPosicao = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

// usando um método do array para calcular a média

const mediaReduce =
  notas.reduce((total, nota) => total + nota, 0) / notas.length;
// Reduce é um método do array que recebe um callback como parâmetro.
//Nesse callback tem um total e uma nota, onde o total é uma variável que fica acomulando e nota é o valor atual conforme a iteração do array

console.log(`Acessando posição: ${mediaAcessandoPosicao}`);
console.log(`Usando reduce: ${mediaReduce}`);
