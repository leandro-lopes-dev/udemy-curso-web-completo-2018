// Serve para Filtrar o Array
const produtos = [
    {nome: "Notebook" , preco: 2499 , fragil: true},
    {nome: "iPad Pro" , preco: 4199 , fragil: true},
    {nome: "Copo de Vidro" , preco: 12.49 , fragil: true},
    {nome: "Copo de Plástico" , preco: 18.99 , fragil: false}
]

    console.log(produtos.filter(function (p) {
        return true
    }))

const caro = produto => produtos.preco >= 500;
const fragil = produto => produtos.fragil;
const barato = produto => produtos.preco <= 499;

console.log(produtos.filter(caro));
console.log(produtos.filter(fragil));
console.log(produtos.filter(barato));