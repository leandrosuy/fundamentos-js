let semafaro = 'verde';
let mensagem = '';

// IF, ELSE e ELSE IF
if(semafaro == 'verde') {               // se semafaro for igual a verde
    mensagem = 'Pode passar'            // mensagem recebe 'Pode passar'
} else if (semafaro == 'amarelo') {     // se não, se semafaro for igual a amarelo
    mensagem = 'Atenção'                // mensagem recebe 'Atenção'
} else if (semafaro == 'vermelho') {    // se não, se semafaro for igual a vermelho
    mensagem = 'Pare!'                  // mensagem recebe 'Pare!'
} else {                                // se não
    mensagem = 'Valor inválido'         // mensagem recebe 'Valor inválido'
}

// SWITCH

switch(semafaro){
    case 'verde':
        mensagem = 'Pode passar' 
    break;
    case 'amarelo':
        mensagem = 'Atenção'
    break;
    case 'vermelho':
        mensagem = 'Pare!'
    break;
    
    default: 
        mensagem = 'Valor inválido'
}

console.log(mensagem)