let num1 = prompt("Digite o primeiro numero");
let num2 = prompt("Digite o segundo numero");

num1 = parseFloat(num1)
num2 = parseFloat(num2)

let opercao = prompt("Digite a operação");

if(opercao == '+'){
    console.log(num1 + num2)
} else if (opercao == '-'){
    console.log(num1 - num2)
} else if (opercao == '/'){
    console.log(num1 / num2)
} else if (opercao == 'x'){
    console.log(num1 * num2)
} else{
    console.error("Operation not found")
}