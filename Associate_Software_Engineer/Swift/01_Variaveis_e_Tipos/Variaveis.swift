// --- Fundamentos: Variáveis, Constantes e Tipos ---

print("--- Tópico: Comentários e Console ---")
// Comentário de uma linha (igual ao JavaScript)

/*
 Esse é um comentário de múltiplas linhas
 posso montar um textinho no código para explicar algo (igual ao JavaScript)
 */

// Em Swift, usamos a função print() para exibir mensagens no console.
print("Olá, Fernando! Você será Associate Software Engineer na Coddy em breve! 🚀")
print("Fernando, você será Lead Software Engineer na Coddy em breve! 🚀")


print("\n--- Tópico: Declaração de Variáveis, Constantes e Tipos Primitivos ---")
// 'var' cria uma variável, cujo valor pode ser alterado.
var numero = 10 // Swift infere o tipo como Int (inteiro)
print(numero)

numero = 100 // Reatribuindo outro valor a uma variável 'var'
print(numero)

var nome = "Fernando" // Swift infere o tipo como String
print(nome)

var isDeveloperFernando = true // Swift infere o tipo como Bool (booleano)
print(isDeveloperFernando)

// Em Swift, uma variável não pode ser "undefined". Para representar a ausência de valor,
// usamos "Optionals". Declaramos o tipo seguido de um '?'. O valor é 'nil'.
var variavelSemValor: String?
print(variavelSemValor) // O valor padrão é 'nil'

// 'let' cria uma CONSTANTE. Seu valor não pode ser alterado após a primeira atribuição.
// Isso é o equivalente ao 'const' do JavaScript.
let pi = 3.14
print(pi)


print("\n--- Tópico: Interpolação de Strings ---") // Em Swift, o termo é "String Interpolation"
let meuNomeCompleto = "Fernando" // Uso de camelCase é o padrão em Swift também
print("O valor da constante meuNomeCompleto é: \(meuNomeCompleto)")

/*
  Exercício 1: Cartão de Apresentação
*/
print("\n--- Exercício 1: Minha Apresentação ---")
let meuNome = "Fernando"
let minhaProfissao = "Associate Software Engineer"
let minhaCidade = "São Paulo"
let anoDeNascimento = 1992

print("Olá! Eu sou o \(meuNome), nasci em \(anoDeNascimento), moro em \(minhaCidade) e atualmente sou \(minhaProfissao).")