const dataNascimento = document.querySelector("#nascimento");
dataNascimento.addEventListener("blur", (event) => {
  validaDataDeNascimento(event.target);
});

function validaDataDeNascimento(input) {
  const dataRecebida = new Date(input.value);
  let messagem = maiorQue18(dataRecebida)
    ? ""
    : "Você precisa ter mais de 18 anos";

  input.setCustomValidity(messagem);
}

function maiorQue18(data = new Date()) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataMais18 <= dataAtual;
}
