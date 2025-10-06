console.log(`--- Exercicio de Template Literal ---`);

let nomeProduto = "iPad";
let precoProduto = 7500.0;
let nomeLoja = "Apple";
let disponivel = true;

// console.log(`O ${nomeProduto} da loja ${nomeLoja} custa R$: ${precoProduto} e atualmente o status da sua disponibilidade é: ${disponibilidade}`);

console.log(`
--- Etiqueta do Produto ---
Produto: ${nomeProduto}
Preço: R$${precoProduto.toFixed(2).replace(".", ",")}
Disponível em estoque: ${disponivel ? "Sim" : "Não"}
Vendido por: ${nomeLoja}
`);

console.log(`--- Fim do Exercicio ---`);
