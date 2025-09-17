// Laços de Repetição (Loops) em JavaScript

console.log("--- Exemplo com o laço 'for' ---");
// Ideal para quando sabemos o número de repetições.
// Sintaxe: for (inicialização; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(`O número da iteração é ${i}`);
}
// Saída: 0, 1, 2, 3, 4

console.log("\n--- Exemplo com o laço 'for' percorrendo um Array ---");
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

for (let i = 0; i < frutas.length; i++) {
  // 'frutas.length' retorna o tamanho do array (neste caso, 4)
  console.log(`A fruta na posição ${i} é: ${frutas[i]}`);
}

console.log("\n--- Exemplo com o laço 'while' ---");
// Ideal para quando não sabemos o número de repetições, apenas a condição de parada.
let contador = 0;
while (contador < 3) {
  console.log(`Contador do 'while' está em: ${contador}`);
  contador++; // Importante: sem isso, teríamos um laço infinito!
}
// Saída: 0, 1, 2

console.log("\n--- Exemplo com o laço 'do...while' ---");
// Garante que o código seja executado pelo menos uma vez.
let numero = 10;
do {
  console.log(`O 'do...while' executou com o número: ${numero}`);
  numero++;
} while (numero < 5); // A condição é falsa, mas o bloco já executou uma vez.
// Saída: O 'do...while' executou com o número: 10

console.log("\n--- Bônus: Laço 'for...of' (para Arrays e Strings) ---");
// Uma forma mais moderna e limpa de percorrer itens de uma lista (iteráveis).
const cores = ["Vermelho", "Verde", "Azul"];
for (const cor of cores) {
  // A cada iteração, a variável 'cor' recebe um valor do array 'cores'.
  console.log(`Cor: ${cor}`);
}
// Saída: Vermelho, Verde, Azul

console.log("\n--- Bônus: Laço 'for...in' (para Objetos) ---");
// Usado para percorrer as propriedades (chaves) de um objeto.
const pessoa = {
  nome: "Fernando",
  idade: 33,
  profissao: "Desenvolvedor",
};

for (const chave in pessoa) {
  // A variável 'chave' recebe o nome da propriedade ("nome", "idade", "profissao").
  console.log(`${chave}: ${pessoa[chave]}`);
}
// Saída:
// nome: Fernando
// idade: 33
// profissao: Desenvolvedor
