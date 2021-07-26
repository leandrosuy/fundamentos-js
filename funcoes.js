function validarIdade(idade){
    if(idade >= 18){
        return console.log("Usuario e maior de idade");
    } else if(idade === "" || idade == undefined){
        return console.log("Erro: Idade não pode ser vazia")
    } else {
        return console.log("Usuario e menor de idade")
    }
}

function validarPais(pais){
    if(pais !== "brasil" || pais !== "Brasil"){
        return console.log("Usuario não pode esta fora do Brasil")
    }
}

idade = prompt("Digite sua idade")

pais = prompt("Digite seu País")

validarIdade(idade, pais)