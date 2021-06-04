// estrutura de repetição
// ******* FOR ********
for( let i = 0; i<10; i++) {
    console.log(i)
}

for( let i = 100; i > 1; i--) {
    console.log(i)
}

//  podemos tambem para a execução do loop usando "break"
for( let i = 100; i > 1; i--) {
    if( i === 50) {
        break
    }
    console.log(i)
}

//  podemos tambem pular uma parte do loop usando "continue"
for( let i = 10; i > 1; i--) {
    if( i === 5) {
        continue
    }
    console.log(i)
}



// ******* WHILE ********
 let i = 94857934857293857

 while( i > 10) {
     console.log(i)
     i /= 12;
 }

// ******* FOR OF ********
let name = 'Lucas'
let names = [ 'Ana', 'Nina', 'Maia']

for( let char of name) {
    console.log(char)
}

let name = 'Lucas'
let names = [ 'Ana', 'Nina', 'Maia']

for( let name of names) {
    console.log(name)
}

// ******* FOR IN ********
let person = {
    name: 'Ana',
    age: '26',
    weight: 56,
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}