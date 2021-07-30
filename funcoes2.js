// Função vazia
function testes(){
    //executado quando chamar a função.
    console.log('Chamando a função testes');
}

// função com parametros
function testes2(nome, idade){
    console.log(`O nome passado é: ${nome} a idade é ${idade} anos`)
}

function pegarNome(parametro){
    console.log("testes");
    if(parametro == 1){
        return "Guilherme"
    } else {
    return "Outro nome"; // quando tem o return, tudo que vem a baixo é ignorado
    }
}

let fun = function(){
    alert("Olá teste")
}

(() =>{
    alert('Olá teste')
});

// fun();

var nome = pegarNome(250);

console.log(nome)