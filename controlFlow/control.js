// Control flow

// if ... else

let hour = 8 
if(hour <= 12) {
    console.log('Ainda está de dia')
} else if(hour > 12 && hour <= 13) {
    console.log('Está no meio do dia')
} else {
    console.log('Já está de noite')
}

let hour = 12.1
let morning = hour <= 12
let nigth = hour > 12 && hour <= 13

if(morning) {
    console.log('Está de manhã')
} else if(nigth) {
    console.log('Está no meio do dia')
} else {
    console.log('Já está de noite')
}

// switch

// calculadora simples
function calculate(number1, operator, number2) {
    let result = 0
    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
    }

    return result
}


console.log(calculate(22, '%', 45))

// throw (disparar/lançar)
let firstName = 'Ana'
let surName = 'Luiza'

function sayMyName(name) {
    if( name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

//  try...catch
try {
    sayMyName(firstName + ' ' + surName)
} catch(e) {
    console.log(e)
}

console.log('Depois do try')
