/*
let voto = "30"

if (voto === "20") {
    console.log("você votou no marcelo");
} else if (voto === "30") {
    console.log("você votou no perna longa");
} else if (voto === "40") {
    console.log("você votou no patolino");
}else{
    console.log('voto nulo')
}
*/

//switch só trabalha com igualdade. como uma lista fixa de valores constantes.

let voto = "";

switch (voto) {
    case "20":
        console.log("você votou no marcelo");
        break;
    case "30":
        console.log("você votou no perna longa");
        break;
    case "40":
        console.log("você votou no patolino");
        break;
    default:
        console.log("voto nulo");
}
