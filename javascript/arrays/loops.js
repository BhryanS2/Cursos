const numeros = [100, 200, 300, 400, 500];

// -> for
console.log("-> for");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// while
let i = 0;
console.log("\n-> while");
while (i < numeros.length) {
  console.log(numeros[i]);
  i++;
}

// do while
i = 0;
console.log("\n-> do while");
do {
  console.log(numeros[i]);
  i++;
} while (i < numeros.length);

// forEach
console.log("\n-> forEach");
numeros.forEach((numero) => console.log(numero));
