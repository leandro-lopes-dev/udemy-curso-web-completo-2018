Number.prototype.entre = function (inicio , fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(6, 8)){
        console.log('Aluno normal')
    }else if(nota.entre(4, 5.99)){
        console.log('Aluno em recuperação')
    }else if(nota.entre(1, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota Inválida')
    }
}

console.log('fim');

imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado(2);
imprimirResultado(2.99);
imprimirResultado(0);
imprimirResultado(5);