/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível.
*/

/*

### Celsius em Fahrenheint e o contrário

Crie uma função que receba uma string em celsius ou fahrenheint e faça a transformação de uma unidade para a outra.

C = ( F - 32 ) * 5/9

F = C * 9/5 + 32

*/


// traformar('50F')

function transformarGraus(graus) {
    const celsiusExiste = graus.toUpperCase().includes('C')
    const fahrenheintExeiste = graus.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExiste && !fahrenheintExeiste) {
        throw new Error ('Grau não identificado')
    }

    // fluxo ideial F -> C
    let novoGrau = Number(graus.toUpperCase().replace('F', ''));
    let formula = fahrenheint => ( fahrenheint - 32 ) * 5/9
    let grauSinal = 'C'

    // fluxo alternativo C -> F
    if(celsiusExiste) {
        novoGrau = Number(graus.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9/5 + 32
        grauSinal = 'F'
    }

    return formula(novoGrau) + grauSinal
}

try {
    console.log(letters.transformarGraus('10c'))
    console.log(transformarGraus('50f'))
    transformarGraus('60z')
} catch (error) {
    console.log(error.message)
}