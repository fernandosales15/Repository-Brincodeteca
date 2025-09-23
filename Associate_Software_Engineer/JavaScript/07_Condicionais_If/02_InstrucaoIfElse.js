console.log(" --- Inicializando o Exercicio 02 - Instrução If...Else --- ");

let notaFinal = 10; 

if (notaFinal >= 7 ) {
    console.log("Verificando sua Nota Final ....");
    console.log(`Sua nota final foi: ${notaFinal}`); 
    console.log("Parabens, você foi aprovado(a)!");
} 

else if (notaFinal < 7 && notafinal >= 5) {
    console.log("Verificando sua Nota Final ....");
    console.log(`Sua nota final foi: ${notaFinal}`); 
    console.log("Você está de recuperação!");
} 

else {
    console.log("Verificando sua Nota Final ....");
    console.log(`Sua nota final foi: ${notaFinal}`); 
    console.log("Infelizmente você foi reprovado(a)!");
}