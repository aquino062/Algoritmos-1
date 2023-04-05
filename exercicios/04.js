let nota1 = 10;
let nota2 = 7.5;
let nota3 = 1;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(
        `Parabéns, sua média foi ${media.toFixed(2)}, você Foi aprovado!`
    );
} else {
    console.log(`sua média foi ${media.toFixed(2)} você Foi Reprovado!`);
}
