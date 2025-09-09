//Criando uma variável chamada "nome" e atribuindo o valor "Fernando"
var nome = "Fernando Sales" 
var cargo = "Associate Software Engineer"
var idade = 33  
var altura: Double = 1.70 
var isDeveloper = true 

print (nome)
print ("Nome:", nome)
print ("Idade:", idade)
print ("nome:", nome, "Cargo:", cargo)

var cidade = "São Paulo"
var estado = "SP"
var populacao = 19000000
print("A cidade de \(cidade) localizada no estado de \(estado) possui \(populacao) habitantes.")

var anosParaAposentar = 65 - idade /* Cálculo de anos restantes para aposentadoria, 
ou seja atribuindo 65 a variavel anosParaAposentar e subtraindo pelo valor da minha idade*/
print("Faltam \(anosParaAposentar) anos para me aposentar.")

var isSoftwareEngineer = true 

if isDeveloper == true {
    print("Fernando - Associate Software Engineer")
}

else {
    print("Ainda não.")
}
