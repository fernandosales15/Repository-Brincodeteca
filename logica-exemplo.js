// --- Exemplo Prático de Lógica de Programação ---

// 1. VARIÁVEIS: Guardando as informações em "caixas".
const nomePessoa = "Ana";
let idadePessoa = 17;
const idadeMinimaParaDirigir = 18;

console.log(
  `Analisando a situação de ${nomePessoa}, que tem ${idadePessoa} anos.`
);

// 2. CONDICIONAL: Tomando uma decisão com base na idade.
if (idadePessoa >= idadeMinimaParaDirigir) {
  // Este bloco só executa SE a condição for verdadeira.
  console.log("Parabéns! Você já pode tirar sua carteira de motorista.");
} else {
  // Este bloco só executa SE a condição for falsa.
  console.log("Que pena! Você ainda não tem idade para dirigir.");

  // 3. LAÇO DE REPETIÇÃO: Vamos calcular quantos anos faltam.
  const anosQueFaltam = idadeMinimaParaDirigir - idadePessoa;
  console.log(`Falta(m) ${anosQueFaltam} ano(s). Contagem regressiva:`);

  for (let i = 1; i <= anosQueFaltam; i++) {
    // 4. SEQUÊNCIA: Este console.log está dentro do laço e será repetido.
    console.log(`Faltam ${i}...`);
  }
  console.log("Logo você poderá!");
}
