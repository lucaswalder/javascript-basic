// tipos de dados

/*
Object

* Objeto
* Propriedades / Atributos
* Funcionalidades / Métodos

{ propriedade: "valor" }

*/

{
    console.log(({
        name: "Lucas",
        idade: "28",
        andar: function() {
            console.log('andar')
        }
    }))
    
}

// criando um Objeto

const person = {
    name: 'Ana',
    age: 26,
    weigth: 68.8,
    isMyWife: true
}

console.log(person.age) //depois do objeto coloco qual propriedade eu quero que apareça

console.log(`${person.name} tem ${person.age}, pesa ${person.weigth}kg.
Ela é a minha esposa? ${person.isMyWife}.
`)



