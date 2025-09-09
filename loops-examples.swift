// Laços de Repetição (Loops) em Swift

print("--- Exemplo com o laço 'for-in' com intervalo (Range) ---")
// Em Swift, o laço 'for' no estilo C (for ;;) não existe mais.
// Usamos 'for-in' com um intervalo (range) para repetir um número conhecido de vezes.
// '0..<5' cria um intervalo que vai de 0 até 4.
for i in 0..<5 {
  print("O número da iteração é \(i)")
}
// Saída: 0, 1, 2, 3, 4


print("\n--- Exemplo com o laço 'for-in' percorrendo um Array ---")
let frutas = ["Maçã", "Banana", "Laranja", "Uva"]

// Para obter o índice e o valor de forma segura e "Swifty", usamos o método .enumerated()
for (indice, fruta) in frutas.enumerated() {
  print("A fruta na posição \(indice) é: \(fruta)")
}


print("\n--- Exemplo com o laço 'while' ---")
// A sintaxe do 'while' é muito parecida, mas não requer parênteses ao redor da condição.
var contador = 0
while contador < 3 {
  print("Contador do 'while' está em: \(contador)")
  contador += 1 // O mesmo que contador = contador + 1
}
// Saída: 0, 1, 2


print("\n--- Exemplo com o laço 'repeat-while' ---")
// O equivalente ao 'do...while' do JavaScript em Swift é o 'repeat-while'.
// A lógica é a mesma: garante que o bloco de código seja executado pelo menos uma vez.
var numero = 10
repeat {
  print("O 'repeat-while' executou com o número: \(numero)")
  numero += 1
} while numero < 5 // A condição é falsa, mas o bloco já executou uma vez.
// Saída: O 'repeat-while' executou com o número: 10


print("\n--- Bônus: Laço 'for-in' (para Coleções) ---")
// Este é o laço padrão em Swift para percorrer itens de uma coleção (Array, Set, etc.).
// É o equivalente direto do 'for...of' do JavaScript.
let cores = ["Vermelho", "Verde", "Azul"]
for cor in cores {
  print("Cor: \(cor)")
}
// Saída: Vermelho, Verde, Azul


print("\n--- Bônus: Laço 'for-in' (para Dicionários) ---")
// O equivalente a um Objeto JavaScript em Swift é, na maioria das vezes, um Dicionário [Chave: Valor].
// O laço 'for-in' itera sobre os pares (chave, valor) do dicionário.
let pessoa: [String: Any] = [
  "nome": "Fernando",
  "idade": 33,
  "profissao": "Desenvolvedor"
]
for (chave, valor) in pessoa {
  print("\(chave): \(valor)")
}
// Saída (a ordem não é garantida):
// nome: Fernando
// idade: 33
// profissao: Desenvolvedor