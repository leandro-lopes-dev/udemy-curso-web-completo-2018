function soBoaNoticia(nota){
    if(nota >= 7){
         console.log('Aprovado ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6)



function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdadeiro ...' + valor)
    }
}

seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo()
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-2)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})