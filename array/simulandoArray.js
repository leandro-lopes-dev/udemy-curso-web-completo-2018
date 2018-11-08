const quaseArray = {0: 'Leandro' , 1: 'Flavia' , 2: 'Pipoca'};

console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Kaio' , 'Paulo' , 'Bia']
console.log(Array.toString(), meuArray);
