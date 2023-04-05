let qntdEntrevistados = 0;
let mediaIdade = "";
let maisNovo = 9999;
let maisVelho = 0;
let porcentagemMenorIdade = "";
let qntdMenoresIdade = 0;
let somaIdades = 0;


while (qntdEntrevistados < 5) {
    let idadeInformada = parseInt(prompt("Por favor, digite sua idade:"));

    if (idadeInformada > maisVelho) {
        maisVelho = idadeInformada;
    }

    if (idadeInformada < maisNovo) {
        maisNovo = idadeInformada;
    }

    if (idadeInformada < 18) {
        qntdMenoresIdade++;
    }

    somaIdades += idadeInformada;
    qntdEntrevistados++;
}


console.log(`O mais novo é: ${maisNovo}`);
console.log(`O mais velho é: ${maisVelho}`);
porcentagemMenorIdade = (qntdMenoresIdade / 5) * 100;
console.log(`Porcentagem de entrevistados menores de idade: ${porcentagemMenorIdade}%.`);
mediaIdade = somaIdades / 5;
console.log(`A média das idades é ${mediaIdade.toFixed(2)}.`);
