const pessoa = {nome: 'joão'}

pessoa.nome = 'Pedro'
console.log(pessoa.nome)

// pessoa -> 456 -> (...)
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // congela o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Joao'})
