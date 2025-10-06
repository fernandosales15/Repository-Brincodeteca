console.log(`--- Exercício: Conversão Explícita --- `);

//Conversão Explicita (Type Casting) - O Programador força a conversão de texto em número.

let precoProduto = 99.9;
let quantidadeNoCarrinho = "3";

console.log(
  `Atualmente o valor da variável ${quantidadeNoCarrinho} é do tipo: ${typeof quantidadeNoCarrinho}`
);
console.log(
  `Convertendo o valor da Variável quantidadeNoCarrinho para número...`
);
quantidadeNoCarrinho = parseFloat(quantidadeNoCarrinho); //parseFloat() converte string em número de ponto flutuante(Double)
console.log(
  `Agora o valor da variável quantidadeNoCarrinho é do tipo: ${typeof quantidadeNoCarrinho}`
);

console.log(`Calculando o custo total...`);
let custoTotal = precoProduto * quantidadeNoCarrinho;
console.log(`O custo total para 3 itens é de R$ ${custoTotal.toFixed(2)}`);

console.log(`--- Fim do Exercício --- `);
