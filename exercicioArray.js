let vegetal = prompt("Digite o vegetal");

const vegetais = ['batata', 'tomate', 'pimenta', 'pimentao']

function atualizarColecaoVegetais(vegetais, vegetal){
    if(vegetais.indexOf(vegetal) === -1){
        vegetais.push(vegetal);
        console.log(`Nova coleção de vegetais agora é ${vegetais}`)
    } else if (vegetais.indexOf(vegetal) > -1){
        console.log(`Vegetal já está no array`)
    }
}

atualizarColecaoVegetais(vegetais, vegetal)

