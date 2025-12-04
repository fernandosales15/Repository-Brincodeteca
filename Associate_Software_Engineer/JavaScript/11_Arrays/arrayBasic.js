//'Arrays' é uma lista de elementos, podem ser de muitos tipos diferentes (números, strings, objetos, etc)

console.log(`--- Iniciando a criação de um array ---`);

let listaDeFrutas = ["Maçã", "Banana", "Laranja", "Manga"];
console.log(`--- Array criado: ---`);
console.log(`--- imprimindo o array no console ---`);
console.log(listaDeFrutas);
console.log(`--- Finalizando a criação do array de frutas --- `);

console.log(`-- Acessando o primeiro elemento do meu array --- `);
console.log(listaDeFrutas[0]);

console.log(
  `--- Iniciando um laço de repetição para exibir os elementos no console ---`
);
for (let i = 0; i < listaDeFrutas.length; i++) {
  console.log(`Fernando, atualmente você tem a fruta: ${listaDeFrutas[i]}`);
}

console.log(`--- Fernando, as frutas acabaram --- `);
