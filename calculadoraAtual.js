// Aplicação calculadora dinâmica.

// Queremos um número inicial
// Queremos um sinal (tiopo de operação)
// Queremos um número final

let numeroInicial = prompt('Digite o número inicial:');

let sinal = prompt('Informe o sinal da operação...');

function validarOperacao(){
    while(sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*'){
        alert('Por favor informe um sinal válido!');
        sinal = prompt('Informe o sinal da operação...');
    }
}

validarOperacao();

let numeroFinal = prompt('Digite o número final');

numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal);

let resultFinal = 0;

if(sinal == '+'){
    resultFinal = numeroInicial + numeroFinal;
} else if (sinal == '-') {
    resultFinal = numeroInicial - numeroFinal;
} else if (sinal == '/') {
    resultFinal = numeroInicial / numeroFinal;
} else if (sinal == '*') {
    resultFinal = numeroInicial * numeroFinal;
}

alert(resultFinal)