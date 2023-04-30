

// um lado nao pode ser maior que os outros dois lados.

let lado1 = 4;
let lado2 = 4;
let lado3 = 7;

if (lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado1 + lado2) {
    console.log("Não é um triangulo.");
} 




 else if (lado1 === lado2 && lado2 === lado3) {
    console.log("Equilátero");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log("isósceles");
} else {
    console.log("escaleno");
}



/*
var a = 6
var b = 4
var c = 7


if (a + b > c && b + c > a && a + c > b){
    if (a == b && b == c){
        console.log(`${a} , ${b}, ${c}. todos lados são iguais. o tringulo é equilátero.`)

    } else if (a == b || b == c || c == a){
        console.log(`${a} , ${b}, ${c}. dois lados são iguais. o triangulo é isósceles.`)

    } else if( a != b && b !=c && c != a ){
        console.log(`${a} , ${b}, ${c}. todos os lados são diferentes. o triangulo é escalano.`)

    } else {
        console.log("valor inválido")
    }
} else {
    console.log(" os valores não pode formar um triangulo")
} 
*/