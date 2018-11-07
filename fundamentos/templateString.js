// o segredo da concatenações está no back chicken aspas invertidas `

const nome = 'Leandro';
const concatenacao = 'Olá ' + nome + '!';
const template = `
olá
${nome}!`

console.log(concatenacao, template);


// expressões ...

console.log(`1+1 =  ${1+1}`)

const up = texto => texto.toUpperCase();
console.log(`Ei ... ${up('cuidado')}!`);