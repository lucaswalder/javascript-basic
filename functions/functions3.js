// function hoisting
sayMyName()

function sayMyName() {
    console.log('Lucas')
}

// arrow function
const sayYourName = () => {
    console.log('Lucas Felipe Angelino Walder')
}

sayYourName()


// callback functions

function sayMyAge(age) {
    console.log('antes de executar a função callback')
    age()
    console.log('depois de executar a função callback')
}

sayMyAge(
    () => {
        console.log('estou em uma callback')
    }
)

// function constructor

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando."
    }
}

const Ana = new Person('Ana')
const Nina = new Person('Nina')

console.log(Nina.walk())
console.log(Ana.walk())