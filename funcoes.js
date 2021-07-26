function validarIdade(idade){
    if(idade >= 18){
        return console.log("Usuario e maior de idade");
    } else if(idade === "" || idade == undefined){
        return console.log("Erro: Idade não pode ser vazia")
    } else {
        return console.log("Usuario e menor de idade")
    }
}

idade = prompt("Digite sua idade")

validarIdade(idade)