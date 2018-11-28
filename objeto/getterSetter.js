const sequencia = {
    _valor: 1, // é uma convenção o uso do underline
    get valor(){return this._valor++},
    set valor(valor){
        if (valor>this._valor){
            this._valor = valor
        }
    }      
                
}

console.log(sequencia.valor , sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor , sequencia.valor , sequencia.valor)