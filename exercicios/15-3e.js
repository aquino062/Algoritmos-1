

let opcaoMenu;
let totalConta = 0;

do {
    opcaoMenu = prompt(
        "Escolha uma opção:\n1 - Troca de óleo (R$100)\n2 - Revisão geral (R$200)\n3 - Sair"
    );

    if (opcaoMenu === "1") {
        totalConta += 100;
        alert(
            "Troca de óleo realizada. Total da conta: R$" +
                totalConta.toFixed(2)
        );
    } else if (opcaoMenu === "2") {
        totalConta += 200;
        alert(
            "Revisão geral realizada. Total da conta: R$" +
                totalConta.toFixed(2)
        );
    } else if (opcaoMenu === "3") {
        alert("Obrigado por utilizar nossos serviços.");
    } else {
        alert("Opção inválida. Tente novamente.");
    }
} while (opcaoMenu !== "3");



/*
do{

}while( i > 7)
*/ 