// function expression or anonymous
// parameters 

const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 10
let number2 = 15

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)


// outra maneira de entender functions
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

let copo = fazerSuco('Banana', 'Maça')

console.log(copo)


// function scope
let subject
function createThink() {
    subject = 'New'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)