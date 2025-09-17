// --- Fundamentos: Variáveis e Tipos ---

console.log("--- Tópico: Comentários e Console ---");
// Comentário de uma linha

/*
Esse é um comentário de múltiplas linhas
posso montar um textinho no código para explicar algo
*/

//Essas linha de código imprimirá uma mensagem no console.
console.log(
  "Olá, Fernando! Você será Associate Software Engineer na Coddy em breve! 🚀"
);
console.log("Fernando, você será Lead Software Engineer na Coddy em breve! 🚀");

console.log("\n--- Tópico: Declaração de Variáveis e Tipos Primitivos ---");
//inicializando variáveis
let numero = 10; // Tipo: number
console.log(numero);

numero = 100; // Reatribuindo outro valor a uma variável
console.log(numero);

let nome = "Fernando"; // Tipo: string (Texto)
console.log(nome);

let isDeveloperFernando = true; // Tipo: boolean (true ou false)
console.log(isDeveloperFernando);

let variavelSemNome; // Variável declarada, mas sem valor atribuído.
console.log(variavelSemNome); // O valor padrão é 'undefined'

// Constantes não podem ter seu valor reatribuído
const pi = 3.14;
console.log(pi);

console.log("\n--- Tópico: Template Strings ---");
let meuNomeCompleto = "Fernando"; // Uso de camelCase para nome de variável
console.log(`O valor da variável meuNomeCompleto é: ${meuNomeCompleto}`);

/*
  Exercício 1: Cartão de Apresentação
*/
console.log("\n--- Exercício 1: Minha Apresentação ---");
let meuNome = "Fernando";
let minhaProfissao = "Associate Software Engineer";
let minhaCidade = "São Paulo";
const anoDeNascimento = 1992;

console.log(
  `Olá! Eu sou o ${meuNome}, nasci em ${anoDeNascimento}, moro em ${minhaCidade} e atualmente sou ${minhaProfissao}.`
);
