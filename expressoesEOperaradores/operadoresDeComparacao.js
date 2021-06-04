// Operadores de comparação

// Irá comparar os valores e retornará um Boolean como resposta a comparação (true or false)
 
let one = 1
let two = 2

//  == igual a
console.log( two == 1 ) // return false
console.log( one == "1") //return true

//  != diferente de
console.log( one != two ) //return true
console.log( one != 1 ) //return false
console.log( one != "1" ) //return false

// === estritamente igual a
console.log( one === "1" ) //return false
console.log( one === 1 ) //return true

// !== estritamente diferente de
console.log( two !== "2" ) //return true
console.log( two !== 2 ) //return false

// > Maior que
console.log( two > one ) //return true

// >= Maior igual a
console.log( one >= 1 ) //return true
console.log( two >= 1 ) //return true

// < Menor que
console.log( one < two ) //return true

// <= Menor igual a
console.log( one <= two ) //return true
console.log( one <= 1 ) //return true
console.log( one <= 0 ) //return false

