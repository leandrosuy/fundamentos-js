let semafaro = 'verde';
let mensagem = '';

if(semafaro == 'verde') {               // se semafaro for igual a verde
    mensagem = 'Pode passar'            // mensagem recebe 'Pode passar'
} else if (semafaro == 'amarelo') {     // se não, se semafaro for igual a amarelo
    mensagem = 'Atenção'                // mensagem recebe 'Atenção'
} else if (semafaro == 'vermelho') {    // se não, se semafaro for igual a vermelho
    mensagem = 'Pare!'                  // mensagem recebe 'Pare!'
} else {                                // se não
    mensagem = 'Valor inválido'         // mensagem recebe 'Valor inválido'
}

console.log(mensagem)