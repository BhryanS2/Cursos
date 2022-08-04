const nomes = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"];
const notas = [4, 8, 6, 7, 10];

const reprovados = nomes.map((nome, index) => notas[index] < 5);
console.log(reprovados);
