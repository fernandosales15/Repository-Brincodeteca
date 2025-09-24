console.log(" --- Inicializando o Exercicio 02 - Instrução If...Else --- ");

let notaFinal = 10;

console.log("\nVerificando sua Nota Final ....");
console.log(`Sua nota final foi: ${notaFinal}`);

if (notaFinal >= 7) {
  console.log("Parabens, você foi aprovado(a)!");
}
// Se a primeira condição (>= 7) for falsa, já sabemos que a nota é < 7.
// Por isso, não precisamos verificar `notaFinal < 7` novamente.
// Corrigido o typo de "notafinal" para "notaFinal".
else if (notaFinal >= 5) {
  console.log("Você está de recuperação!");
} else {
  console.log("Infelizmente você foi reprovado(a)!");
}
