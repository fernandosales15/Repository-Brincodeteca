// --- Fundamentos: Operadores ---

/*
  Exercício 2: Calculadora Simples (Operadores Aritméticos)
*/
console.log("\n--- Exercício 2: Calculadora Simples ---");
let valorA = 20;
let valorB = 5;

console.log(`Resultados para ${valorA} e ${valorB}:`);
console.log(`Soma: ${valorA + valorB}`);
console.log(`Subtração: ${valorA - valorB}`);
console.log(`Multiplicação: ${valorA * valorB}`);
console.log(`Divisão: ${valorA / valorB}`);

console.log("\n--- Tópico: Atalhos Aritméticos (Operadores de Atribuição) ---");
let contador = 0;
console.log(`Valor inicial do contador: ${contador}`);

contador += 10; // Equivalente a: contador = contador + 10;
console.log(`Após += 10: ${contador}`);

contador *= 5; // Equivalente a: contador = contador * 5;
console.log(`Após *= 5: ${contador}`);

contador /= 2; // Equivalente a: contador = contador / 2;
console.log(`Após /= 2: ${contador}`);

contador -= 3; // Equivalente a: contador = contador - 3;
console.log(`Após -= 3: ${contador}`);

/*
  Exercício 4: Simulador de Pontuação de Jogo
*/
console.log("\n--- Exercício 4: Simulador de Pontuação de Jogo ---");
let pontuacaoUsuario = 100;
console.log(`Pontuação inicial: ${pontuacaoUsuario}`);

pontuacaoUsuario += 75;
console.log(`Após bônus de fase (+75): ${pontuacaoUsuario}`);

pontuacaoUsuario -= 30;
console.log(`Após penalidade (-30): ${pontuacaoUsuario}`);

pontuacaoUsuario *= 2;
console.log(`Após item multiplicador (x2): ${pontuacaoUsuario}`);

pontuacaoUsuario /= 2;
console.log(`Pontuação final da rodada (/2): ${pontuacaoUsuario}`);

console.log("\n--- Tópico: Operadores de Comparação ---");
/*
  Exercício 5: Verificador de Estoque e Promoção
*/
console.log("\n--- Exercício 5: Verificador de Estoque e Promoção ---");
let quantidadeEmEstoque = 50;
let pedidoMinimo = 20;
let pedidoCliente = 25;

let estoqueSuficiente = quantidadeEmEstoque > pedidoCliente;
console.log(
  `A quantidade em estoque é maior que o pedido do cliente? ${estoqueSuficiente}`
);

let atendePedidoMinimo = pedidoCliente >= pedidoMinimo;
console.log(
  `O pedido do cliente atende ao pedido mínimo? ${atendePedidoMinimo}`
);

console.log("\n--- Tópico: Operadores Lógicos (&&, ||, !) ---");
let opLogicoE = 10 < 100 && 100 < 200; // E (AND): ambas as condições precisam ser verdadeiras.
console.log(`10 < 100 && 100 < 200 é: ${opLogicoE}`);

let opLogicoOu = 100 > 50 || 50 < 25; // OU (OR): apenas uma condição precisa ser verdadeira.
console.log(`100 > 50 || 50 < 25 é: ${opLogicoOu}`);

let opLogicoNao = !(5 < 4); // NÃO (NOT): inverte o resultado booleano (false vira true).
console.log(`!(5 < 4) é: ${opLogicoNao}`);

/*
  Exercício 7: Verificador de Acesso com Operadores Lógicos
*/
console.log("\n--- Exercício 7: Verificador de Acesso ---");
let usuarioLogado = true;
let assinaturaPremium = false;
let ehAdmin = false;

console.log(
  `Status: Logado=${usuarioLogado}, Premium=${assinaturaPremium}, Admin=${ehAdmin}`
);

// Regra: O acesso é permitido se (o usuário está logado E é premium) OU se (o usuário é admin).
let temAcesso = (usuarioLogado && assinaturaPremium) || ehAdmin;

if (temAcesso) {
  console.log("Resultado: Acesso PERMITIDO! Bem-vindo(a).");
} else {
  console.log(
    "Resultado: Acesso NEGADO. Verifique suas credenciais ou assinatura."
  );
}
