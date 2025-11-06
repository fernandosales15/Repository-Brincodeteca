//Laço de repetição com Break. 

let countNumber = 100;
console.log("---- Exercicio de Loops: Usando Break ----");

while (countNumber <= 200) {
    console.log(`Número atual: ${countNumber}`);
    countNumber -= 1;

    if (countNumber === 90) {
        console.log("Chegou ao valor 90, saindo do loop.");
        break;
    }
}

console.log("---- Fim do Loop ----");