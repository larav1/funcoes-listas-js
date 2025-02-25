// 1
function calculoIMC(peso, altura) {
  return peso / altura ** 2;
}
let imc = calculoIMC(100, 1.6);
console.log(imc);

// 2
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial = fatorial * i;
  }

  return fatorial;
}

let numero = 4;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// 3
function converterMoeda(num) {
  return 4.8 * num;
}
let num = 6;
let moeda = converterMoeda(num);
console.log(`A conversão de ${num} de dólar para real é: R$`, moeda.toFixed(2));

// 4
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 5;
let largura = 7;
calcularAreaPerimetroSalaRetangular(altura, largura);

// 5
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 6;
calcularAreaPerimetroSalaCircular(raio);

// 6
function mostrarTabuada(numeroTabuada) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numeroTabuada = 5;
console.log(`Taboada de ${numeroTabuada}`);
mostrarTabuada(numeroTabuada);
