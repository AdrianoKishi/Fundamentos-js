// == -> comparação implícita

/* const numero = 5;
const texto = "5";

console.log(numero == texto); */
// O resultado é TRUE. O jS fez a conversão do texto para um número
// passando assim o resultado de texto que agora é um número. 5 == 5 TRUE

// ---------------------------------------------------------------------------------

// === -> comparação explícita

const numero = 5;
const texto = "5";

console.log(numero === texto);
// O resultado é FALSE. O jS não faz a conversão, ele passa o resultado direto
// da comparação. O tipo e o valor é igualado, por isso retorna FALSE.

// --------------------------------------------------------------------------------

// typeof -> Usamos para descobrir o tipo de dado
console.log(typeof numero); // type number
console.log(typeof texto);  // type string
