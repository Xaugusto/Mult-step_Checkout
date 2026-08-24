const botaoRecomecar = document.getElementById("recomecar");

function recomecar() {
  sessionStorage.removeItem("dadosPessoais");
  sessionStorage.removeItem("dadosEntrega");
  window.location.href = "../../index.html";
}

botaoRecomecar.addEventListener("click", () => {
  recomecar();
});
