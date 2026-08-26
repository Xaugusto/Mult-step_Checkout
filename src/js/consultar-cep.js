const cepInput = document.getElementById("CEP");
const enderecoInput = document.getElementById("endereco");
const numeroInput = document.getElementById("numero");
const complementoInput = document.getElementById("complemento");
const bairroInput = document.getElementById("bairro");
const cidadeInput = document.getElementById("cidade");
const estadoInput = document.getElementById("estado");

const botaoConsulta = document.getElementById("calcCep");

async function calcularCEP() {
  cepInput.value = "85067-050";
  const url = `https://viacep.com.br/ws/${cepInput.value.replaceAll("-", "")}/json/`;

  const resp = await fetch(url);
  const dados = await resp.json();
  console.log(dados);
  enderecoInput.value = dados.logradouro;
  bairroInput.value = dados.bairro;
  cidadeInput.value = dados.localidade;
  estadoInput.value = dados.uf;
}

botaoConsulta.addEventListener("click", function () {
  calcularCEP();
});
