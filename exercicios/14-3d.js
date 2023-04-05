/*
const senhaCorreta = prompt("Digite sua senha para entrar:");
let senhaUsuario;

do {
  senhaUsuario = prompt("Digite a senha para sair:");
} while (senhaUsuario !== senhaCorreta);

alert("Senha correta. Você pode sair agora.");
*/

const senhacorreta = prompt("digite a senha para entrar");
let senhausuario;

for (;;) {
   senhausuario = prompt("digite a senha para sair");
    if (senhausuario === senhacorreta){
        alert("senha correta, você pode sair agora.");
    break;
}else{
  alert('senha incorreta.')
}
}



