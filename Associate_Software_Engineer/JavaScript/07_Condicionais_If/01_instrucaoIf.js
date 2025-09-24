let idade = 33;

// Para condições que se excluem, a estrutura if...else if é mais indicada.
// Assim que uma condição verdadeira é encontrada, as outras não são testadas.
// A lógica foi ajustada para cobrir todas as idades.
if (idade < 33) {
  console.log("Você é Associate Software Engineer");
} else if (idade >= 33 && idade < 40) {
  // Exemplo de uma faixa para Pleno/Sênior
  console.log("Você é Pleno/Sênior Software Engineer");
} else {
  // Para idades >= 40
  console.log("Você é Staff Software Engineer");
}

console.log(`\nExercício de IF - Condicionais ---`);

let notaFinal = 8;
const notaMinimaParaAprovacao = 7;

console.log(`--- Iniciando a verificação de Aprovação do Aluno ---`);
if (notaFinal >= notaMinimaParaAprovacao) {
  console.log(`Parabéns, você foi aprovado! Sua nota final foi ${notaFinal}.`);
} else {
  console.log(
    `Infelizmente, você não foi aprovado. Sua nota final foi ${notaFinal}.`
  );
}

console.log(`--- Fim da verificação de Aprovação do Aluno ---`);
