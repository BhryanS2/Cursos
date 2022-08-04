// var => escopo global (window)
// let => escopo de bloco (if, for, while, do-while) e mutável
// const => escopop de bloco e imutável

// var altura = 5;
// var comprimento = 10;

// area = altura * comprimento; // 50
// var area;

// let forma = "retângulo";
// let altura = 5;
// let comprimento = 10;
// let area;

// if (forma === "retângulo") {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area);

const forma = "triangulo";
const altura = 5;
const comprimento = 10;

let area;

if (forma === "quadrado") {
  area = altura * altura;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);
