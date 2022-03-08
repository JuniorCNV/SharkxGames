const pageAtual = window.location.href;
const caixas = document.getElementsByClassName("caixa");

for (let caixa of caixas) {
    caixa.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.02)";
    this.style.cursor = "pointer";
    this.children[1].children[0].style.color = "#e0e2f4";
  });

  caixa.addEventListener("mouseout", function () {
    this.style.transform = "";
    this.children[1].children[0].style.color = "";
  });
}
