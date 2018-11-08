console.log(typeof Array, typeof new Array, typeof[]);
let aprovados = new Array('Leandro' , 'Carlos' , 'Pedro');

console.log(aprovados);

aprovados = ['Leandro' , 'Carlos' , 'Pedro']
console.log(aprovados[2]);
aprovados [3] = 'Paulo';
console.log(aprovados);
aprovados.push ('Kaio');
console.log(aprovados);
aprovados[9] = 'Henrique';
aprovados.sort();
console.log(aprovados);
console.log(aprovados.length);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia' , 'Carlos' , 'Ana']
aprovados.splice(1 ,0);
console.log(aprovados);