const validadores = {
  dataNascimneto: (input) => validaDataDeNascimento(input),
};

const mensagensDeErro = {
  nome: {
    valueMissing: "O campo nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo email não pode estar vazio.",
    typeMismatch: "O email digitado não é válido.",
  },
  senha: {
    valueMissing: "O campo senha não pode estar vazio.",
    patternMismatch:
      "A senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caracter especial e pelo menos 6 caracteres",
  },
  dataNascimento: {
    valueMissing: "O campo data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar",
  },
};

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
  } else {
    input.parentElement.classList.add("input-container--invalido");
  }
}

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
