const pilotos = ['Vettel' , 'Alonso' , 'Raikkonen' , 'Massa'];
pilotos.pop() // remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen') // inclui mais uma elemento na lista na última posição
console.log(pilotos);


pilotos.shift(); // remove o 1º da lista
console.log(pilotos)

pilotos.unshift('Hamilton'); // insere mais um na lista, aparecendo como o 1º da lista
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar

pilotos.splice(2, 0 , 'Bottas' , 'Massa');
console.log(pilotos);

// remover

pilotos.splice(3,1) // removo a partir do índice do 2
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)// cria novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(0 , 3)// vai pegar uma parte do array
console.log(algunsPilotos2);