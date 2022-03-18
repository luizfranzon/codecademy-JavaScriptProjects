//alguém me ajuda socorro por favor

let input = 'turpentine and turtles';

//codigo
const vowels = ['a','e','i','o','u'];
let resultArray = [];
let resultString;

for (let n1 = 0; n1 < input.length; n1++) {
    for (let n2 = 0; n2 < vowels.length; n2++){
        if (input[n1] === vowels[n2]) {
        resultArray.push(vowels[n2])
    if (vowels[n2] === 'e') {
        resultArray.push('e')
    } else if (vowels[n2] === 'u') {
        resultArray.push('u')
            }
        }
    }
}

resultString = resultArray.join('').toUpperCase()

console.log(resultString)

console.log('UUEEIEEAUUEE')










