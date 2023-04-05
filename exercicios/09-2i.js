
let altura = 1.60
let peso = 54
let imc = peso / (altura * altura)

console.log(imc.toFixed(2))

if(imc < 19 ){
    console.log('abaixo do peso')
} else if (imc < 24 ){
    console.log('peso ideal')
}else{
    console.log('acima do peso')
}

