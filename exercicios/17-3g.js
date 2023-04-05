/*
let start = prompt("digite um valor para começar ")
let end = prompt('digite um valor para finalizar')
let decremento = prompt("qual o decremento?")


for (start; start >= end; start -= decremento) {
   console.log(start);

}
*/

//abre no navegador e veja no console o algoritmo funcionando.

let start = prompt("Digite um valor para começar:");
let end = prompt("Digite um valor para finalizar:");
let passo = prompt("Qual o passo?");

if (isNaN(start) || isNaN(end) || isNaN(passo)) {
  alert("ERRO: os valores digitados devem ser números.");
} else  {
  start = Number(start);
  end = Number(end);
  passo = Number(passo);

  if (passo === 0) {
    alert("ERRO: o passo deve ser um número não nulo.");
  } else {
    // contagem crescente
    if (start < end) {
      for (let i = start; i <= end; i += passo) {
        console.log(i);
      }
    // contagem regressiva
    } else if (start > end) {
      for (let i = start; i >= end; i -= passo) {
        console.log(i);
      }
    }
  }
}

