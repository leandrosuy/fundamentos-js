function Pessoa(){
    this.nome = "Leandro"; // this 'isto é', traduzindo de forma simplificada = 'isto é o nome'
}

let pessoa = new Pessoa(); // Crio a variavel pessoa passando o new Pessoa(Objeto criado acima)

pessoa.nome = 'João'       // Aqui eu posso alterar o nome da Pessoa(Objeto)

alert(pessoa.nome)