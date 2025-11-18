//Iniciando as prátics de Exerçicios de funções em JavaScript

console.log(
  `---- Iniciando as práticas de Exerçicios de funções em JavaScript ----`
);

// 1. A função agora recebe a idade como um "parâmetro".
// Ela não depende mais de uma variável externa.
function calcularIdadeEmDias(idadeEmAnos) {
  const idadeEmDias = idadeEmAnos * 365;
  // 2. A função agora "retorna" o resultado em vez de imprimi-lo.
  return idadeEmDias;
}

// 3. Chamamos a função passando a idade "32" como "argumento".
const resultado = calcularIdadeEmDias(32);

// 4. O código fora da função decide o que fazer com o resultado.
console.log(`A idade em dias é: ${resultado} dias.`);

console.log(
  `---- Fim das práticas de Exerçicios de funções em JavaScript ----`
);
