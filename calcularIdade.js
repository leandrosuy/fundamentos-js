let anoNascimento = prompt("Por favor informe a data do seu nascimento");

while(anoNascimento >= 2020){
    alert('Por favor informe o seu ano de nascimento corretamente');
    anoNascimento = prompt("Por favor informe a data do seu nascimento");
}

let anoAtual = prompt("É qual o ano atual ?");

var idadeFinal = anoAtual - anoNascimento;

alert(`À sua idade é: ${idadeFinal} anos`)