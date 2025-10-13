const precoProdutoA = "25.99"; // string
const quantidadeProdutoA = "2"; // string
const precoProdutoB = 10.5; // number
const frete = "15.00"; // string
const cupomDesconto = "10"; // string

console.log(`--- Exercício: Conversão de Tipos --- `);

console.log(
  `Convertando as variáveis ${precoProdutoA} que é do tipo ${typeof precoProdutoA} e ${quantidadeProdutoA} que é do tipo ${typeof quantidadeProdutoA}`
);
// 1. Calcula o custo total do Produto A, convertendo as strings para números
const totalProdutoA = Number(precoProdutoA) * Number(quantidadeProdutoA);

console.log(`O total do Produto A é de R$ ${totalProdutoA.toFixed(2)}`);
console.log(`Conversão do Produto A Concluída!`);

console.log(` --- Iniciando o cálculo do subtotal da Compra --- `);
// 2. Calcula o subtotal somando o total do Produto A com o preço do Produto B
const subTotalCompra = totalProdutoA + precoProdutoB;
console.log(`O subtotal da compra é de R$: ${subTotalCompra.toFixed(2)}`);

console.log(` --- Iniciando o cálculo do custo final da Compra --- `);
// 3. Calcula o custo final, somando o frete e subtraindo o desconto (ambos convertidos para número)
const custoFinalCompra = subTotalCompra + Number(frete) - Number(cupomDesconto);

// 4. Exibe a mensagem final formatada para o usuário
console.log(
  `\nO valor final da sua compra é R$ ${custoFinalCompra.toFixed(2)}`
);

console.log(`--- Fim do Exercício --- `);
