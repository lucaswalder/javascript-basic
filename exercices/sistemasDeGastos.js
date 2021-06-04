/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível.
*/

/*

### Sistema de gastos familiares

Crie um objeto que possuirá duas propriedades, ambas do tipo array:
    * receitas []
    * despesas []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let familia = {
    receitas: [3000, 2500, 1200, 565.70],
    despesas: [2000, 400, 350, 110.50]
}

function soma(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }

    return total
} 

function totalMensal() {
    const somarReceitas = soma(familia.receitas)
    const somarDespesas = soma(familia.despesas)
    const total = somarReceitas - somarDespesas
    const receitaFinal = total >= 0
    let mensagem = "negativo"

    if(receitaFinal) {
        mensagem = "positivo"
    } 

    console.log(`Seu saldo é ${mensagem}: R$${total.toFixed(2).replace("." , ",")}`)
}

totalMensal()