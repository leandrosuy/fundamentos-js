let nomes = ['Guilherme', 'Felipe', 'João', 'José'];

// Interação de um array de forma tradicional
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// Interação de um array com forEach
nomes.forEach((valor, posicao)=>{
    console.log(`O nome é ${valor}, é a posição do ${valor} é ${posicao}`)
})
// O forEach precisa sempre ter um valor e uma posição