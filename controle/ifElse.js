const imprimirResultado = function(nota){
    if(nota >=6){
        console.log ('Aprovado!')
        
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!') // cuidado a linguagem é fracamente tipada!