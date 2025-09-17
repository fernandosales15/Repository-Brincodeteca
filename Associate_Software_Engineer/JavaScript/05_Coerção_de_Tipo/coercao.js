console.log("--- Tópico: Conversão Explícita de Tipos (Type Casting) ---");

let numTypeInt = 100;
console.log(`\nConvertendo Number para String:`);
console.log(`Valor original: ${numTypeInt} (tipo: ${typeof numTypeInt})`);
let numTypeIntConvert = String(numTypeInt);
console.log(
  `Valor convertido: "${numTypeIntConvert}" (tipo: ${typeof numTypeIntConvert})`
);

let numTypeString = "100";
console.log(`\nConvertendo String para Number:`);
console.log(
  `Valor original: "${numTypeString}" (tipo: ${typeof numTypeString})`
);
// Corrigindo o erro de digitação: 'numtypeSring' para 'numTypeString'
let numTypeStringConvert = Number(numTypeString);
console.log(
  `Valor convertido: ${numTypeStringConvert} (tipo: ${typeof numTypeStringConvert})`
);

console.log("\n----------------------------------------------------");

console.log("--- Exercício: Calculadora de Idade para Evento ---");

const anoAtual = 2024; // Usando o ano corrente para maior precisão
const anoNascimentoString = "1995";

console.log(`\nDados de entrada:`);
console.log(`- Ano Atual: ${anoAtual}`);
console.log(`- Ano de Nascimento (string): "${anoNascimentoString}"`);

// 1. Conversão explícita da string para número
const anoNascimentoNumber = Number(anoNascimentoString);

// 2. Lógica de cálculo da idade (a sua já estava correta!)
const idadeCalculada = anoAtual - anoNascimentoNumber;
console.log(
  `\nCálculo: ${anoAtual} - ${anoNascimentoNumber} = ${idadeCalculada}`
);
console.log(`Resultado: O usuário tem ${idadeCalculada} anos.`);

console.log(`\n-- Verificando se o usuário é maior de idade ---`);

if (idadeCalculada >= 18) {
  // Corrigindo o "á" para "à"
  console.log(`Acesso à área restrita PERMITIDO!`);
} else {
  console.log(`Acesso Negado! Essa área é somente para maiores de 18 anos.`);
}
