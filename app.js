//1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// 2
document.getElementById("consoleButton").addEventListener("click", function () {
  console.log("O botão foi clicado");
});

// 3
document.getElementById("loveJavascript").addEventListener("click", () => {
  console.log("Eu amo JS");
});

// 4

let cidade = prompt("Digite o nome de uma cidade do Brasil:");
alert(`Estive em ${cidade} e lembrei de você.`);

// 5

document.getElementById("somaNumeros").addEventListener("click", () => {
  let num1 = prompt("Digite um número:");
  let num2 = prompt("Digite outro número:");

  // Verifica se os valores não são nulos e converte para número
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Verifica se os valores são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite números válidos.");
  } else {
    alert(`A soma de ${num1} + ${num2} é ${num1 + num2}`);
  }
});
