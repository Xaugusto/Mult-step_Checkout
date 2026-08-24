const dadosPessoais = JSON.parse(sessionStorage.getItem("dadosPessoais"));
const dadosEntrega = JSON.parse(sessionStorage.getItem("dadosEntrega"));

const botaoPessoais = document.getElementById("btnDadosPessoais");
const botaoEntrega = document.getElementById("btnDadosEntrega");

function mostrarDadosEntrega() {
  const enderecoItens = document.getElementById("enderecoItens");
  const cidadeItens = document.getElementById("cidadeItens");
  const CEPitens = document.getElementById("CEPitens");

  if (dadosEntrega) {
    enderecoItens.innerHTML =
      dadosEntrega.endereco + ", " + dadosEntrega.numero;
    if (dadosEntrega.complemento)
      enderecoItens.innerHTML += ", " + dadosEntrega.complemento;
    cidadeItens.innerHTML =
      dadosEntrega.bairro +
      ", " +
      dadosEntrega.cidade +
      " - " +
      dadosEntrega.estado;
    CEPitens.innerHTML = "CEP: " + dadosEntrega.cep;
  }
}

function mostrarDadosPessoais() {
  const nomeitem = document.getElementById("nome");
  const emailitem = document.getElementById("email");
  const telefoneitem = document.getElementById("telefone");

  if (dadosEntrega) {
    nomeitem.innerHTML = dadosPessoais.nome;
    emailitem.innerHTML = dadosPessoais.email;
    telefoneitem.innerHTML = dadosPessoais.telefone;
  }
}

botaoPessoais.addEventListener("click", () => {
  const dadosPessoaisEdit = 1;
  sessionStorage.setItem("dadosPessoaisEdit", dadosPessoaisEdit);
  window.location.href = "../../index.html?editando=1";
});

botaoEntrega.addEventListener("click", () => {
  const dadosEntregaEdit = 1;
  sessionStorage.setItem("dadosEntregaEdit", dadosEntregaEdit);
  window.location.href = "../pages/entrega.html";
});

mostrarDadosEntrega();
mostrarDadosPessoais();
