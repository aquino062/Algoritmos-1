let nota1 = 10;
let nota2 = 3;
let nota3 = 4.2;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(
        `Parabéns, sua média foi ${media.toFixed(2)}, você Foi aprovado!`
    );
} else if (media < 5){
    console.log(`sua média foi ${media.toFixed(2)} você Foi Reprovado!`);
} else{
    console.log(`sua média foi ${media.toFixed(2)} você está de Recuperação!`);
}
