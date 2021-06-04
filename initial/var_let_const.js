// var são globais e funcionam fora do escopo

// const e let não são globais

// const não pode ser alterada

const lucas = "homem"
// lucas = 0

console.log(lucas)


{
let lucas = "homem"
lucas = 0

console.log(lucas)
};

{
    var programador = 0
    programador = "lucas"
    console.log(`o melhor programador é o ${programador}`)
};

let nome = document.getElementById('name').innerHTML = "Hello World";
