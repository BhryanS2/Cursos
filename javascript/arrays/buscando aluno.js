// localizando alunos
const alunos = ["Naruto", "Sasuke", "Sakura", "Kakashi"];
const notas = [8.5, 9.5, 7.5, 6.5];

const matrizAlunosNotas = [alunos, notas];

const exibirAluno = (nomeDoAluno = "") => {
  if (!alunos.includes(nomeDoAluno)) {
    return "Aluno não encontrado";
  }

  const index = matrizAlunosNotas[0].indexOf(nomeDoAluno);
  return `${nomeDoAluno} tem nota ${matrizAlunosNotas[1][index]}`;
};

const aluno = exibirAluno("Sasuke");
console.log(aluno);
