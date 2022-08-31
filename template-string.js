const nome = "Adriano";
const idade = 2022-1991;
const cidadeDeNascimento = "Juazeiro";

// Sem a template string
/* const apresentacao = "meu nome é " + nome + ", minha idade é " + idade +
" e nasci na cidade de " + cidadeDeNascimento; */

// Com a template string
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`

// Usamos o $ seguido de {} para atribuir o valor da variável na string, como um texto

console.log(apresentacao); 