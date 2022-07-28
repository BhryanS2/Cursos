// -> adicionando mais uma nota
const notas = [10, 6.5, 8, 7.8];
console.log(`Notas: ${notas}`);

notas.push(9.5);
console.log(`Adicionando nota no final: ${notas}`);

// O método push adiciona um novo elemento no final do array
// Ele adiciona esse elemento pois faz uma cópia do array original e adiciona o novo elemento no final.

// -> removendo um elemento
// const notas = [10, 6.5, 8, 7.8];
notas.pop();
console.log(`Removendo nota no final: ${notas}`);
// O método pop remove o último elemento do array

// -> adicionando um elemento no início do array
// const notas = [10, 6.5, 8, 7.8];
notas.unshift(9.5);
console.log(`Adicionando nota no início: ${notas}`);
// O método unshift adiciona um novo elemento no início do array

// -> removendo um elemento do início do array
// const notas = [10, 6.5, 8, 7.8];
notas.shift();
console.log(`Removendo nota no início: ${notas}`);
// O método shift remove o primeiro elemento do array

// -> adicionando um elemento em uma posição específica
// const notas = [10, 6.5, 8, 7.8];
notas.splice(0, 1, 9.5);
console.log(`Adicionando nota em uma posição específica: ${notas}`);
// O método splice adiciona um novo elemento em uma posição específica do array

// -> removendo um elemento em uma posição específica
// const notas = [10, 6.5, 8, 7.8];
notas.splice(0, 1);
console.log(`Removendo nota em uma posição específica: ${notas}`);
// O método splice remove um elemento em uma posição específica do array
