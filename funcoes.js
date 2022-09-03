// - Funcoes na Pratica -----------------------------------------------------------

/* let x = "";
console.log(x);
x = "oi"; */

// 1) Declara a função
// *Declaramos a função com algo que queremos que ela retorne pra nós
function imprimeTexto(algumaCoisa) {
    console.log(algumaCoisa);
}

// 2) Executa a função (1 ou + vezes)
// *Para executarmos a função chamamos ela pelo nome
// *Executamos a função com determinado dado, podemos utiliza-la diversas vezes
imprimeTexto(false);      // Aqui detertermino que me retorne um dado booleano
imprimeTexto("Oi");       // Um dado de String
imprimeTexto(2022);       // Ou um dado de número


/* function soma() {          // Esse exemplo de função não nos retorna nada,
    const resultado = 2 + 2;  //podemos observar que passamos uma variável com 
}                             //valor, porém não nos retorna o resultado da soma 

console.log(soma()); */


function soma() {            // Nesse exemplo pedimos um retorno para a função,
    return 2 + 2;            //pedimos que retorne a soma de 2 + 2
}

console.log(soma());

// Podemos chamar a função dessa maneira também

imprimeTexto(soma()); // Executamos a função soma, que é 4 e passamos para a 
                      //a função imprimeTexto. Assim utilizamos 2 funções
                      //em um só, que esta me retornando o valor soma() em uma
                      //que só esta me retornando o valor que foi passado.


