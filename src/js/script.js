const nomeInput = document.getElementById("nomeCompleto");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");
const botao = document.getElementById("formButton");

const editando = sessionStorage.getItem("dadosPessoaisEdit");

function inserirDados() {
  const dadosPessoaisSalvos = JSON.parse(
    sessionStorage.getItem("dadosPessoais"),
  );
  if (editando) {
    nomeInput.value = dadosPessoaisSalvos.nome;
    emailInput.value = dadosPessoaisSalvos.email;
    telefoneInput.value = dadosPessoaisSalvos.telefone;
  }
}

function guardarDados() {
  const dadosPessoais = {
    nome: nomeInput.value,
    email: emailInput.value,
    telefone: telefoneInput.value,
  };

  sessionStorage.setItem("dadosPessoais", JSON.stringify(dadosPessoais));
}

function removeEditSession() {
  sessionStorage.removeItem("dadosPessoaisEdit");
}

function validaCampos() {
  [nomeInput, emailInput, telefoneInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
    });
  });

  if (nomeInput.value.trim() === "") {
    nomeInput.setCustomValidity("O nome é obrigatório!");
    return false;
  }

  if (emailInput.value.trim() === "") {
    emailInput.setCustomValidity("O email é obrigatório!");
    return false;
  }

  if (telefoneInput.value.trim() === "") {
    telefoneInput.setCustomValidity("O telefone é obrigatório!");
    return false;
  }

  if (!document.forms[0].checkValidity()) {
    document.forms[0].reportValidity();
    return false;
  }

  return true;
}

emailInput.addEventListener("input", function () {
  emailInput.setCustomValidity("");
});

emailInput.addEventListener("invalid", function (e) {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Digite um email válido!");
  } else {
    emailInput.setCustomValidity("");
  }
});

function validarDados() {
  if (validaCampos()) {
    if (editando) {
      removeEditSession();
      guardarDados();
      window.location.href = "src/pages/pedido.html";
    } else {
      guardarDados();
      window.location.href = "src/pages/entrega.html";
    }
  }
}

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  validarDados();
});

$("#telefone").mask("(00) 00000-0000");
inserirDados();
