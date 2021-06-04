/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível.
*/

/*

### Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 e 89 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 59 - F

*/

// let notaAluno =  78
function getScore(notaAluno) {
    let notaA = notaAluno >= 90 && notaAluno <= 100
let notaB = notaAluno >= 80 && notaAluno <= 89
let notaC = notaAluno >= 70 && notaAluno <= 79
let notaD = notaAluno >= 60 && notaAluno <= 69
let notaE = notaAluno >= 1 && notaAluno <= 59
let notaFinal

    if(notaA) {
        notaFinal = 'A'
    } else if(notaB) {
        notaFinal = 'B'
    } else if(notaC) {
        notaFinal = 'C'
    } else if(notaD) {
        notaFinal = 'D'
    } else if(notaE) {
        notaFinal = 'E'
    } else {
        notaFinal = 'Nota Inválida'
    }

    return notaFinal
}

    console.log(getScore(101))
    console.log(getScore(99))
    console.log(getScore(10))
    console.log(getScore(18))
    console.log(getScore(34))
    console.log(getScore(55))
    console.log(getScore(62))
    console.log(getScore(78))
    console.log(getScore(90))
