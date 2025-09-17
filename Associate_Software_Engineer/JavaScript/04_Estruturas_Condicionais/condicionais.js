// --- Fundamentos: Estruturas Condicionais ---

/*
  Exercício 3: Verificador de Maioridade

  1. Crie uma variável chamada `idadeUsuario` e atribua um número a ela.
  2. Crie uma constante chamada `idadeMinima` com o valor 18.
  3. Use uma estrutura condicional (if/else) para verificar se a `idadeUsuario` é maior ou igual à `idadeMinima`.
*/

console.log("\n--- Exercício 3: Verificador de Maioridade ---");

let idadeUsuario = 15; // Tente mudar este valor para 25 e veja a diferença!
const idadeMinima = 18;

console.log(`Idade do usuário: ${idadeUsuario}`);

if (idadeUsuario >= idadeMinima) {
  console.log("Acesso permitido, você é maior de idade.");
} else {
  console.log("Acesso negado. Você é menor de idade.");
}
