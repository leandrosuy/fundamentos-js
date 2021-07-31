class Animal{
    constructor(nome){
        this.nome = nome;
    }
    printNome() {
        return this.nome;       // Retorna este nome
    }
}

class Cachorro extends Animal { // Declare essa classe aqui e herde tudo da classe animal
    constructor(nome) {
        super(nome);
        this.raca = 'Bulldog';
    }
    printRaca(){
        return this.raca;
    }
}

let animal = new Animal('Gato');

let cachorro = new Cachorro('Maltes')

alert(cachorro.printRaca())