// Sorteia os valores aleatórios
let aleatorioMinimo = Math.floor(Math.random() * 100) + 1;
let aleatorioMaximo = Math.floor(Math.random() * 100) + 1;
let passoAleatorio = Math.floor(Math.random() * 5) + 1;

// Imprime os valores sorteados
console.log(`Valor mínimo: ${aleatorioMinimo} / Valor máximo: ${aleatorioMaximo} / Incremento: ${passoAleatorio}`);

// Loop para incrementar o valor mínimo até chegar no valor máximo
while (aleatorioMinimo < aleatorioMaximo) {
  aleatorioMinimo += passoAleatorio;

  // Imprime os valores a cada iteração
  console.log(`Valor mínimo: ${aleatorioMinimo} / Valor máximo: ${aleatorioMaximo} / Incremento: ${passoAleatorio}`);
}
