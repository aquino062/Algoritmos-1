let velocidadedoveiculo = 210;
let velocidadeleve = 50 * 1.1;
let velocidademedia = 70;
let velocidadegrave = 90;
let velocidadegravissima = 110;

if(velocidadedoveiculo <= velocidadeleve) {
    console.log("isento");
} else if (velocidadedoveiculo <= velocidademedia) {
console.log('3 pontos na carteira')
} else if (velocidadedoveiculo <= velocidadegrave){
    console.log('4 pontos na carteira')
}else if (velocidadedoveiculo <= velocidadegravissima){
    console.log('5 pontos na carteira')
}else { 
    console.log('7 pontos na carteira')
}
