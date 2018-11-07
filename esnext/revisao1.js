// let e const

{
    var a = 2;
    let b = 3;
}

console.log(a)

var line = '=====================';
console.log(line)

// Template String

const produto = 'iPad'
console.log(`${produto}
é caro!`)

console.log(line)


// Destructuring

const [l, e, ... tras] = "Cod3r";
console.log(l,e,tras);

const [x, , y] = [1,2,3]
console.log(x,y);

const {idade: i , nome } = {nome: 'Ana' , idade: 9}
console.log(i , nome)
 
console.log(line)
