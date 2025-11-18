//Praticando: Nested Loops (Loops Aninhados)
console.log(` ---- Exerçicio de Loops: Prática de Loops Aninhados ---- `);

for (let i = 1; i < 100; i++) {
  console.log(`Inicio do Primeiro Loop: i = ${i}`);
  for (let j = 1; j < 200; j++) {
    console.log(` Loop Aninhado: j = ${j}`);
  }
}

console.log(
  ` ---- Fim do Exerçicio de Loops: Prática de Loops Aninhados ---- `
);
//


console.log(` ----- Novo Exerçicio de Loop Aninhado ----- `);

let superCount = 10000;

for (let a = 1; a < 5000; a++) {
    console.log(`Iniciando o Primeiro Loop: Atualmente a variável 'a'= ${a}`);
    for (let b = 1; b < 1000; b++) {
        superCount -= 2;
        console.log(` Loop Aninhado: Atualmente a variável 'b'= ${b} | superCount = ${superCount}`);
    }
}
console.log(` ----- Fim do Exerçicio de Loop Aninhado ----- `);