// - Expressão de função ------------------------------------------------------------------

// Podemos declarar uma função da seguinte maneira:
// *Uma maneira mais simples de escrever uma função;
// *Não declaramos um nome;
// *Chamamos essa função de anônima, sem nome;
// *O console.log tem que ser depois da declaração da função, se não da erro;
// *Esse é um exemplo de EXPRESSÃO DE FUNÇÃO.
const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1,1));

// ------------------------------------------------------------------------------------

// *Com essa estrutura de função podemos chamar o log antes, pois não da erro;
// *Primeiro o jS vai ler todas as variáveis e funções para depois executa-las.
// *HOISTING, é quando o jS lista todas as funções e variáveis, declara antes de ser
//executada.
console.log(apresentar());
function apresentar() {
    return "olá";
}
 
