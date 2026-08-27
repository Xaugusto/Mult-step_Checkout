const cepInput2 = document.getElementById("CEP");
const enderecoInput2 = document.getElementById("endereco");
const numeroInput2 = document.getElementById("numero");
const complementoInput2 = document.getElementById("complemento");
const bairroInput2 = document.getElementById("bairro");
const cidadeInput2 = document.getElementById("cidade");
const estadoInput2 = document.getElementById("estado");

const botaoConsulta = document.getElementById("calcCep");

async function calcularCEP() {
  const url = `https://viacep.com.br/ws/${cepInput2.value.replaceAll("-", "")}/json/`;

  const resp = await fetch(url);
  const dados = await resp.json();
  console.log(dados);
  enderecoInput2.value = dados.logradouro;
  bairroInput2.value = dados.bairro;
  cidadeInput2.value = dados.localidade;
  estadoInput2.value = dados.uf;
}

botaoConsulta.addEventListener("click", function () {
  calcularCEP();
});
