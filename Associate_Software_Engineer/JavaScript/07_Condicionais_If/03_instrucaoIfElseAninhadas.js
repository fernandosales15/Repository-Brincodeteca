console.log(
  ` --- Inicializando o Exercício 03 - Instrição if...else aninhadas --- `
);

let idade = 17;
let altura = 1.76;

if (idade >= 12) {
  if (altura >= 1.4) {
    console.log("Acesso Permitido. Aproveite o Brinquedo!");
  } else {
    console.log("Acesso Negado. Você não tem a altura mínima necessária.");
  }
} else {
  console.log(
    "Acesso Negado. Você não tem a idade mínima para este brinquedo."
  );
}
