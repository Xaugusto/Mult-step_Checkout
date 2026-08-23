const nomeInput = document.getElementById("nomeCompleto");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const botao = document.getElementById("formButton");

function valNome() {
  if (nomeInput.value.trim() === "") {
    nomeInput.setCustomValidity("O nome é obrigatório!");
    return false;
  }
  nomeInput.setCustomValidity("");
  return true;
}

function valEmail() {
  if (emailInput.value.trim() === "") {
    emailInput.setCustomValidity("O email é obrigatório!");
    return false;
  } else if (!emailInput.validity.valid) {
    emailInput.setCustomValidity("Digite um email válido!");
    return false;
  }
  emailInput.setCustomValidity("");
  return true;
}

$("#telefone").mask("(00) 00000-0000");

function valTelefone() {
  if (telefoneInput.value.trim() === "") {
    telefoneInput.setCustomValidity("O telefone é obrigatório!");
    return false;
  }
  telefoneInput.setCustomValidity("");
  return true;
}

function validarDados() {
  if (!valNome()) {
    nomeInput.reportValidity();
    return;
  }

  if (!valEmail()) {
    emailInput.reportValidity();
    return;
  }

  if (!valTelefone()) {
    telefoneInput.reportValidity();
    return;
  }

  if (valNome() && valEmail() && valTelefone()) {
    window.location.href = "src/pages/entrega.html";
  }
}

botao.addEventListener("click", (e) => {
  e.preventDefault();
  validarDados();
});
