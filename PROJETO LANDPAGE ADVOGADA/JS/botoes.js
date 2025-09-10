// Seleciona todos os botões da página
const botoes = document.querySelectorAll("button");

// Percorre todos os botões
botoes.forEach(botao => {
  botao.addEventListener("mouseover", () => {
    botao.classList.add("animar");
  });

  botao.addEventListener("mouseout", () => {
    botao.classList.remove("animar");
  });
});





