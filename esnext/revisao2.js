// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2,4))


var line = "----------------";
console.log(line);

// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// paramentro default
console.log(line);

function log(texto = 'Node'){
    console.log(texto)
}

log();
log('Sou mais forte');

