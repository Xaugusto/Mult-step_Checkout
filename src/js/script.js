const nomeInput = document.getElementById("nomeCompleto");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const botao = document.getElementById("formButton");

function valNome() {
  if (nomeInput.value.trim() === "") {
    nomeInput.setCustomValidity("O nome é obrigatório!");
  } else {
    nomeInput.setCustomValidity("");
  }
  nomeInput.reportValidity();
}

function valEmail() {
  if (emailInput.value.trim() === "") {
    emailInput.setCustomValidity("O email é obrigatório!");
  } else if (!emailInput.validity.valid) {
    emailInput.setCustomValidity("Digiste um email válido!");
  } else {
    emailInput.setCustomValidity("");
  }
  emailInput.reportValidity();
}

function valTelefone() {
  $("#telefone").mask("(00) 00000-0000");
  if (telefoneInput.value.trim() === "") {
    telefoneInput.setCustomValidity("O telefone é obrigatório!");
  } else {
    telefoneInput.setCustomValidity("");
  }
  telefoneInput.reportValidity("");
}

function botaoStatus() {
  const nomeValido = nomeInput.value.trim() !== "";
  const emailValido =
    emailInput.validity.valid && emailInput.value.trim() !== "";
  const telefoneValido = telefoneInput.value.trim() !== "";

  botao.disabled = !(nomeValido && emailValido && telefoneValido);
}

nomeInput.addEventListener("blur", () => {
  valNome();
  botaoStatus();
});

emailInput.addEventListener("blur", () => {
  valEmail();
  botaoStatus();
});

telefoneInput.addEventListener("blur", () => {
  valTelefone();
  botaoStatus();
});

nomeInput.addEventListener("input", () => {
  nomeInput.setCustomValidity("");
  botaoStatus();
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  botaoStatus();
});

telefoneInput.addEventListener("input", () => {
  telefoneInput.setCustomValidity("");
  botaoStatus();
});
