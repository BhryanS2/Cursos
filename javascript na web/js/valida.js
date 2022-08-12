const validadores = {
  dataNascimneto: (input) => validaDataDeNascimento(input),
  cpf: (input) => validaCPF(input),
  cep: (input) => recuperarCEP(input),
};

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

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
  cpf: {
    valueMissing: "O campo CPF não pode estar vazio.",
    customError: "O CPF digitado não é válido.",
  },
  cep: {
    valueMissing: "O campo CEP não pode estar vazio.",
    patternMismatch: "O CEP digitado não é válido.",
    customError: "O CEP digitado não foi encontrado.",
  },
  logradouro: {
    valueMissing: "O campo logradouro não pode estar vazio.",
  },
  cidade: {
    valueMissing: "O campo cidade não pode estar vazio.",
  },
  estado: {
    valueMissing: "O campo estado não pode estar vazio.",
  },
};

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      mostrarMensagemDeErro(tipoDeInput, input);
  }
}

function mostrarMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });

  return mensagem;
}

function validaDataDeNascimento(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = maiorQue18(dataRecebida)
    ? ""
    : "Você precisa ter mais de 18 anos";

  input.setCustomValidity(mensagem);
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

function validaCPF(input) {
  const cpfFormatado = input.value.replace(/[\D]/g, "");
  let mensagem = "";

  if (!checaCPFRepetidos(cpfFormatado) || checaEstruturaCPF(cpfFormatado)) {
    mensagem = "O CPF digitado não é válido";
  }
  input.setCustomValidity(mensagem);
}

function checaCPFRepetidos(cpf) {
  const valoresRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  let cpfValido = true;

  valoresRepetidos.forEach((valor) => {
    if (cpf === valor) {
      cpfValido = false;
    }
  });

  return cpfValido;
}

function checaDigitoVerficador(cpf = "", multiplicador) {
  if (multiplicador >= 12) return true;

  let multiplicadorInicial = multiplicador;
  let soma = 0;
  const cpfSemDigitos = cpf.substring(0, multiplicador - 1).split("");
  const digitoVerificador = cpf.charAt(multiplicador - 1);

  for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
    soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
    contador++;
  }

  if (digitoVerificador === confirmaDigito(soma)) {
    return checaDigitoVerficador(cpf, multiplicador + 1);
  }

  return false;
}

function checaEstruturaCPF(cpf) {
  const multiplicador = 10;

  return checaDigitoVerficador(cpf, multiplicador);
}

function confirmaDigito(soma) {
  const resto = soma % 11;
  const digito = resto < 2 ? 0 : 11 - resto;
  return digito.toString();
  // return 11 - (soma % 11);
}

function recuperarCEP(input) {
  const cep = input.value.replace(/[\D]/g, "");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };
  if (input.validity.patternMismatch || input.validity.valueMissing) {
    return;
  }
  fetch(url, options)
    .then(async (response) => {
      const dados = await response.json();
      if (dados.erro) {
        input.setCustomValidity("CEP não encontrado");
        return;
      }
      input.setCustomValidity("");
      preencheComposComCep(dados);
      return;
    })
    .catch((error) => console.error(error));
}

function preencheComposComCep(dados) {
  const logradouro = document.querySelector("[data-tipo='logradouro']");
  const cidade = document.querySelector("[data-tipo='cidade']");
  const estado = document.querySelector("[data-tipo='estado']");

  logradouro.value = dados.logradouro;
  cidade.value = dados.localidade;
  estado.value = dados.uf;
}
