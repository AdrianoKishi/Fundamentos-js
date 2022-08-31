const idadeMinima = 18;
const idadeCliente = 16;

/* if (idadeCliente >= idadeMinima) {
    console.log("Pode beber!")
} else {
    console.log("Não pode beber!")
} */


// Operador ternario, semelhante ao if/else
                     //CONDIÇÃO              //TRUE  --ELSE--  //FALSE
console.log(idadeCliente >= idadeMinima ? "Pode beber!" : "Não pode beber!");

// Recomendação não é utiliza-lo quando usar várias condições, fica complicado
// de ler o código depois.
// É bom usa-lo se for uma comparação curta, de fácil entendimento.

// >=  Operador de comparação que vai ser feita  
// ?   Operador para separar as 2 partes da comparação
// :   Operador para separar o resultado em TRUE or FALSE

// Se chama operador ternário por usar 3 operadores em 1 só linha de código.

