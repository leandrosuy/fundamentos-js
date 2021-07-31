function Pessoa(){
    this.nome = 'Leandro';
    this.idade = 28,
    this.profissao = 'Programdor';
    this.returnAnimal = (animal) => {
        return animal
    }
}

// Podemos também receber dados como parametros ex: nome e peso
function Animal(nome, peso){
    // Podemos validar no momento na criação do Objeto
    if(nome == undefined){
        nome = 'Sem nome'; // Se na hora de chamar o Obj Animal e ele não receber os argumentos nescessarios as variaveis 'nome e peso' recebem um valor padrão
    }
    if(peso == undefined){
        peso = 'Sem peso'; // Se na hora de chamar o Obj Animal e ele não receber os argumentos nescessarios as variaveis 'nome e peso' recebem um valor padrão
    }
    this.nome = nome;
    this.peso = peso;
}

// Na hora de chamar o Objeto passamos os argumentos 'nome e peso' que o Objeto animal vai receber
let pessoa = new Pessoa()
let animal = new Animal('Cachorro', ' 30kg')

alert(pessoa.returnAnimal(animal).peso)