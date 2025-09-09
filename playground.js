// Comentário de uma linha

/*
Esse é um comentário de múltiplas linhas
posso montar um textinho no código para explicar algo
*/

//Essas linha de código imprimirá uma mensagem no console.
console.log(
  "Olá, Fernando! Você será Associate Software Engineer na Coddy em breve! 🚀"
); //Exemplo com ;
console.log("Fernando, você será Lead Software Engineer na Coddy em breve! 🚀"); //Exemplo sem ; (Adicionado por consistência)

//inicializando variáveis
let numero = 10;
console.log(numero);

numero = 100; // Reatribuindo outro valor a uma variável
console.log(numero);

let nome = "Fernando"; //String - Texto
console.log(nome);

let isDeveloperFernando = true; // Boolean - true ou false
console.log(isDeveloperFernando);

let isSpecialistFernando = false; // Boolean - true ou false
console.log(isSpecialistFernando);

let meuNomeCompleto = "Fernando"; // Uso de camelCase para nome de variável

let variavelSemNome; // Variável declarada, mas sem valor atribuído. O valor padrão é undefined
console.log(variavelSemNome); // Imprimirá "undefined"

console.log(`meuNomeCompleto = ${meuNomeCompleto}`); // Uso de template string (crase) para interpolar variáveis em strings

const pi = 3.14; // Constante - valor fixo que não pode ser reatribuído
console.log(pi);

console.log("\n--- Exercícios Práticos ---");

/*
  Exercício 1: Cartão de Apresentação
  - Crie variáveis para guardar seu nome, sua profissão e sua cidade.
  - Crie uma constante para guardar seu ano de nascimento.
  - Use console.log e template strings para montar uma frase de apresentação.
  - Exemplo de saída: "Olá! Meu nome é Fernando, nasci em 1990, moro em São Paulo e serei um Desenvolvedor de Software."
*/

let meuNome = "Fernando";
let minhaProfissao = "Associate Software Engineer";
let minhaCidade = "São Paulo";
const anoDeNascimento = 1992;

console.log("\n--- Exercício 1: Minha Apresentação ---");
console.log(
  `Olá! Eu sou o ${meuNome}, nasci em ${anoDeNascimento}, e moro em ${minhaCidade}, atualmente sou ${minhaProfissao}`
);

/*
  Exercício 2: Calculadora Simples
  - Crie duas variáveis, `valorA` e `valorB`, com números quaisquer.
  - Realize as quatro operações básicas: soma, subtração, multiplicação e divisão.
  - Imprima os resultados de forma clara no console.
*/
console.log("\n--- Exercício 2: Calculadora Simples ---");
let valorA = 20;
let valorB = 5;

console.log(`Resultados para ${valorA} e ${valorB}:`);
console.log(`Soma: ${valorA + valorB}`);
console.log(`Subtração: ${valorA - valorB}`);
console.log(`Multiplicação: ${valorA * valorB}`);
console.log(`Divisão: ${valorA / valorB}`);

/*
  Exercício 3: Verificador de Maioridade

  Agora, vamos criar um pequeno programa que toma uma decisão!

  1. Crie uma variável chamada `idadeUsuario` e atribua um número a ela (por exemplo, 25).
  2. Crie uma constante chamada `idadeMinima` com o valor 18.
  3. Use uma estrutura condicional (if/else) para verificar se a `idadeUsuario` é maior ou igual à `idadeMinima`.
  4. Se for maior ou igual, imprima no console: "Acesso permitido. Você é maior de idade."
  5. Se for menor, imprima no console: "Acesso negado. Você é menor de idade."

  Dica: Tente mudar o valor da `idadeUsuario` para um número menor que 18 (como 15) e rode o código novamente para ver o resultado mudar.
*/

console.log("\n--- Exercício 3: Verificador de Maioridade ---");

let idadeUsuario = 15;
const idadeMinima = 18;

if (idadeUsuario >= idadeMinima) {
  console.log("Acesso permitido, você é maior de idade");
} else {
  console.log("Acesso negado. Você é menor de idade");
}

//Atalhos aritiméticos
let contador = 0;

contador += 10;
console.log(contador);

contador *= 5;
console.log(contador);

contador /= 2;
console.log(contador);

contador -= 3;
console.log(contador);

//Operadores de Comparação

let idade = 18;
let idademax = 65;
let analiseIdade = idade > idademax;
console.log(analiseIdade);

console.log("\n--- Exercício 4: Simulador de Pontuação de Jogo ---");
let pontuacaoUsuario = 100;
console.log(`Pontuação inicial: ${pontuacaoUsuario}`);

pontuacaoUsuario += 75;
console.log(`Após bônus de fase (+75): ${pontuacaoUsuario}`);

pontuacaoUsuario -= 30;
console.log(`Após penalidade (-30): ${pontuacaoUsuario}`);

// Cuidado aqui! O nome da variável é 'pontuacaoUsuario' (com 'U' maiúsculo). JavaScript diferencia maiúsculas de minúsculas.
pontuacaoUsuario *= 2;
console.log(`Após item multiplicador (x2): ${pontuacaoUsuario}`);

// O mesmo aqui, a variável correta é 'pontuacaoUsuario'.
pontuacaoUsuario /= 2;
console.log(`Pontuação final da rodada (/2): ${pontuacaoUsuario}`);

console.log("\n--- Exercício 5: Verificador de Estoque e Promoção ---");

let quantidadeEmEstoque = 50;
let pedidoMinimo = 20;
let pedidoCliente = 25;

let pedidoMaior = quantidadeEmEstoque > pedidoCliente;
console.log(
  `A quantidade em estoque é maior que o pedido do cliente? ${pedidoMaior}`
);

let resultadoPedidoCliente = pedidoCliente >= pedidoMinimo;
console.log(
  `O pedido do cliente atende ao pedido mínimo? ${resultadoPedidoCliente}`
);

// Para ver a diferença real, vamos comparar uma string com um número.
let codigoProdutoTexto = "150";
let codigoProdutoNumero = 150; // Alterado para ser um número, não uma string.

let comparacaoSolta = codigoProdutoTexto == codigoProdutoNumero;
console.log(`Comparando "150" == 150 (igualdade solta): ${comparacaoSolta}`);

let comparacaoEstrita = codigoProdutoTexto === codigoProdutoNumero;
console.log(
  `Comparando "150" === 150 (igualdade estrita): ${comparacaoEstrita}`
);
