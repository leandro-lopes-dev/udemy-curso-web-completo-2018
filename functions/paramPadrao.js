// estrategia 1 para gerar valor padrão
function soma2 (a, b, c){

    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c

}

console.log(soma2(), soma2(3), soma(1 , 2, 3) , soma2(0, 0 ,0))

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c,) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? a : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(4))

