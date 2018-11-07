let valor // não vou inicializar

console.log(valor) // vai imprimir undefined pois não foi inicializada

valor = null // ausência de valor
console.log(valor)
// console.log(valor) esta variavel vai dar erro

const produto = {}
console.log(produto.preco)
console.log(produto)


produto.preco = 3.5
console.log(produto)


produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log (!!produto.preco)
console.log(produto)