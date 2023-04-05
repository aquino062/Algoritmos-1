//while

let alturaMarcelo = 1.20;
let alturaJoao = 1.05;
let crescimentoAnualMarcelo = 0.05;
let crescimentoAnualjoao = 0.07;
let idade = 8;


while(alturaMarcelo >= alturaJoao){
alturaMarcelo = alturaMarcelo + crescimentoAnualMarcelo
alturaJoao = alturaJoao + crescimentoAnualjoao
idade = idade + 1;
} 

console.log(`A idade que joão ultrapassa marcelo é com ${idade} anos.`)
console.log(`altura do joão é de ${alturaJoao.toFixed(2)}`)
console.log(`altura do marcelo é de ${alturaMarcelo.toFixed(2)}`)
