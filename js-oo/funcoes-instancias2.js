function Pessoa(){
    this.nome = this.nome;
    this.idade = 28;
    this.printNome = (nome) => {    // Podemos também criar funções dentro de um Objeto
        alert(nome);
    }
}

let nome = prompt('Digite seu nome: ');

let pessoa = new Pessoa();
let pessoa2 = new Pessoa();

pessoa2.printNome(nome);