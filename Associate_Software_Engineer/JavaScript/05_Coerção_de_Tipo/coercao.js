// --- Fundamentos: Coerção de Tipo e Comparadores de Igualdade ---

console.log("\n--- Tópico: Igualdade Flexível (==) vs. Estrita (===) ---");

let numberTypeOne = 100;
let stringTypeOne = "100";

// O operador '==' (flexível) tenta converter os tipos para que sejam iguais antes de comparar os valores.
// Aqui, ele converte a string "100" para o número 100.
let comparacaoFlexivel = numberTypeOne == stringTypeOne;
console.log(
  `Comparando 100 == "100" (flexível): O resultado é ${comparacaoFlexivel}`
);

// O operador '===' (estrito) verifica primeiro se os tipos são iguais. Se não forem, o resultado já é 'false'.
// Ele não tenta fazer nenhuma conversão.
let comparacaoEstrita = numberTypeOne === stringTypeOne;
console.log(
  `Comparando 100 === "100" (estrita): O resultado é ${comparacaoEstrita}`
);

console.log("\n--- Tópico: Desigualdade Flexível (!=) vs. Estrita (!==) ---");
let stringTypeTwo = "200";

// A lógica é a mesma: '!=' converte os tipos, enquanto '!==' não.
let desigualdadeFlexivel = numberTypeOne != stringTypeTwo;
console.log(
  `Comparando 100 != "200" (flexível): O resultado é ${desigualdadeFlexivel}`
);

let desigualdadeEstrita = numberTypeOne !== stringTypeTwo;
console.log(
  `Comparando 100 !== "200" (estrita): O resultado é ${desigualdadeEstrita}`
);

/*
  Exercício 6: Comparador de Ingressos
*/
console.log("\n--- Exercício 6: Comparador de Ingressos ---");
let ingressoNaLista = 582;
let ingressoDigitado = "582";

let comparacaoIngressosFlexivel = ingressoNaLista == ingressoDigitado;
console.log(
  `Comparando 582 == "582" (flexível): O resultado é ${comparacaoIngressosFlexivel}`
);

let comparacaoIngressosEstrita = ingressoNaLista === ingressoDigitado;
console.log(
  `Comparando 582 === "582" (estrita): O resultado é: ${comparacaoIngressosEstrita}`
);

/*
  Exercício 8: Validação de Cupom de Desconto
*/
console.log("\n--- Exercício 8: Validação de Cupom de Desconto ---");
const cupomCorreto = 2024;
const cupomDigitado = "2024"; // Valor que vem de um formulário (string)

console.log(
  `Valor digitado pelo cliente: "${cupomDigitado}" (tipo: ${typeof cupomDigitado})`
);
console.log(
  `Valor correto no sistema: ${cupomCorreto} (tipo: ${typeof cupomCorreto})`
);

let validacaoFlexivel = cupomCorreto == cupomDigitado;
console.log(
  `\nValidação com '==' (flexível): O cupom é válido? ${validacaoFlexivel}`
);

let validacaoEstrita = cupomCorreto === cupomDigitado;
console.log(
  `\nValidação com '===' (estrita): O cupom é válido? ${validacaoEstrita}`
);

console.log(
  "\nReflexão Final: Para um sistema real, o operador de igualdade estrita (===) é sempre a escolha mais segura e recomendada. Ele evita comportamentos inesperados causados pela conversão automática de tipos (coerção), garantindo que a comparação só seja verdadeira se tanto o valor quanto o tipo forem idênticos."
);
