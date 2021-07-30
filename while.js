// A estrutura de repetição while sempre e preciso usar uma variavel

let i = 0

let str = ''

// while(i < 5){
//     console.warn('Inside Loop ' + i);
//     i++
// }

while(i < 5) {
    if(i <= 3) {
        console.log('Is less than 5');
    } else {
        str += i
    }
    i++
}

console.log(str)
console.log('Script running')