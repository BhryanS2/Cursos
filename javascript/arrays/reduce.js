const notasJS = [6.7, 7.4, 9.8, 8.1, 7.1, 8.8, 9.0];
const notasPython = [7.5, 8.5, 9.5, 6.5, 7.5, 8.5, 9.5];
const notasCSharp = [8.5, 9.5, 7.5, 6.5, 8.5, 9.5, 7.5];

function media(notas = []) {
  const media =
    notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
  return Math.floor(media * 10) / 10;
}

const mediaJS = media(notasJS);
const mediaPython = media(notasPython);
const mediaCSharp = media(notasCSharp);

console.log(`Média JavaScript: ${mediaJS}`);
console.log(`Média Python: ${mediaPython}`);
console.log(`Média C#: ${mediaCSharp}`);
