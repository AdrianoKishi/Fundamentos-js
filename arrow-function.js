// Função simples, usamos o template string para nos retornar um texto onde
//se encontra o dado ${nome};
// Só precisamos determinar uma variável para nome e retornar com um .log o resultado.

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// -------------------------------------------------------------------------------------

// - Arrow function 

// *Ela declara uma função de uma maneira mais simples ainda;
// *Não pode ser nomeada, logo, é uma função anônima;
// *Ela sempre vai vir com uma const com o nome da variável;
// *Não precisamos declarar o return, pois é uma função de uma linha.


const apresentarArrow = nome => `Meu nome é ${nome}`;   // Exemplo 1 - String
const soma = (num1, num2) => num1 + num2;               // Exemplo 2 - Soma

// - Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return true
    } else {
        return false
    }
}
