//1
function olaMundo() {
  console.log("Olá mundo");
}
olaMundo();

//2
function nome() {
  let nome = prompt("Digite o seu nome:");
  console.log(`Olá, ${nome}!`);
}
nome();

//3
function dobroNumero() {
  let num = parseInt(prompt("Digite um número:"));
  console.log(`O dobro de ${num} é`, num * 2);
}
dobroNumero();

//4
function mediaNumero() {
  let num1 = parseFloat(prompt("Número 1:"));
  let num2 = parseFloat(prompt("Número 2:"));
  let num3 = parseFloat(prompt("Número 3:"));
  let media = parseFloat(num1 + num2 + num3) / 3;
  console.log(`A média de ${num1}, ${num2}, ${num3} é:`, media);
}

mediaNumero();
