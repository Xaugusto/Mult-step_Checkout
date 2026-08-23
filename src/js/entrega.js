const cepInput = document.getElementById("CEP");
const enderecoInput = document.getElementById("endereco");
const numeroInput = document.getElementById("numero");
const bairroInput = document.getElementById("bairro");
const cidadeInput = document.getElementById("cidade");
const estadoInput = document.getElementById("estado");
const botaoForm = document.getElementById("formButton");

$("#CEP").mask("00000-000");

function valCEP() {
  if (cepInput.value.trim() === "") {
    cepInput.setCustomValidity("O CEP é obrigatório!");
    return false;
  }
  cepInput.setCustomValidity("");
  return true;
}

function valEndereco() {
  if (enderecoInput.value.trim() === "") {
    enderecoInput.setCustomValidity("O endereço é obrigatório!");
    return false;
  }
  enderecoInput.setCustomValidity("");
  return true;
}

function valNumero() {
  if (numeroInput.value.trim() === "") {
    numeroInput.setCustomValidity("O número é obrigatório!");
    return false;
  }
  numeroInput.setCustomValidity("");
  return true;
}

function valBairro() {
  if (bairroInput.value.trim() === "") {
    bairroInput.setCustomValidity("O bairro é obrigatório!");
    return false;
  }
  bairroInput.setCustomValidity("");
  return true;
}

function valCidade() {
  if (cidadeInput.value.trim() === "") {
    cidadeInput.setCustomValidity("A cidade é obrigatório!");
    return false;
  }
  cidadeInput.setCustomValidity("");
  return true;
}

function valEstado() {
  if (estadoInput.value == "Selecione") {
    estadoInput.setCustomValidity("O estado é obrigatório!");
    return false;
  }
  estadoInput.setCustomValidity("");
  return true;
}

function validarEntrega() {
  if (!valCEP()) {
    cepInput.reportValidity();
    return;
  }

  if (!valEndereco()) {
    enderecoInput.reportValidity();
    return;
  }

  if (!valNumero()) {
    numeroInput.reportValidity();
    return;
  }

  if (!valBairro()) {
    bairroInput.reportValidity();
    return;
  }

  if (!valCidade()) {
    cidadeInput.reportValidity();
    return;
  }

  if (!valEstado()) {
    estadoInput.reportValidity();
    return;
  }

  if (
    valCEP() &&
    valEndereco &&
    valNumero &&
    valBairro &&
    valCidade &&
    valEstado
  ) {
    window.location.href = "../pages/pedido.html";
  }
}

botaoForm.addEventListener("click", (e) => {
  e.preventDefault();
  validarEntrega();
});
