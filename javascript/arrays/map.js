// map
const notas = [8, 9, 7, 6];

const notasAtualizadas = notas.map((nota) => (nota + 1 > 10 ? nota : nota + 1));

console.log(notasAtualizadas);
