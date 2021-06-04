// prototype
// usar o . depois de uma string, number, object ou array abre um leque de possibilidades para manipular os dados.

// Type conversion (typecasting) vs Type coersion
// alteração do tipo de um dado para outro dado.

// type conversion
console.log(Number('9') + 5) // resultado 14

//type coersion
console.log('9' + 5) // resultado 95 ( o js muda o número 5 para uma string)


// manipulando strings e números
// transformar string em números e números em strings

let string = "321"
console.log(Number(string))

let number = 123
console.log(String(number))

// contar quantos caracteres tem em uma palavra e quantos dígitos em um número
let word = "paralelepipedo"
console.log(word.length)

let numbers = 123456
console.log(String(numbers).length) //precisa trasnformar o número em uma string para poder usar o length


// transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let newNumber = 12322.8794859345
console.log(newNumber.toFixed(2).replace("." , ","))

// transformar letras minúsculas em maiúsculas e o oposto também.
let words = "Programar é muito bacana"
console.log(words.toLowerCase()) //tudo minúsculas
console.log(words.toUpperCase()) //tudo maiúsculas


// Manipulando strings e arrays

// separar um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu amo a minha esposa."
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())


// verificar se um texto tem uma palavra específica
let newPhrase = "Minha esposa é o Amor da minha vida"
console.log(newPhrase.includes("amor"))


// crair array com construtor
let newArray = new Array("1", "2", "3")
console.log(newArray)


// contar elementos de um array
console.log([
    "a",
    {nome: "array"},
    function() {
        return "Vazio"
    }
].length)

//  transforma uma cadeia de caracteres em elementos de um array

let newWords = "manipulação"
console.log(Array.from(newWords))

