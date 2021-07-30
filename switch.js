let num1 = prompt("Digite o primeiro numero");
let num2 = prompt("Digite o primeiro numero");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
operacao = prompt("Digite a operação");

switch(operacao){
    case '+':
        console.log(num1 + num2)
    break;

    case '-':
        console.log(num1 - num2)
    break;

    case '/':
        console.log(num1 / num2)
    break;

    case '*':
        console.log(num1 * num2)
    break;

    default:
        console.error("Operation not found!")
}