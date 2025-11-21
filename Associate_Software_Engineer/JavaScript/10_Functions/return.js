//Conceito de 'return' na função.
console.log(`---- Conceito de função com 'return' em JavaScript ---- `);

function nomeAddCargo(nome, cargo, empresa) {
  // A função agora apenas cria a string e a RETORNA.
  const frase = `Olá! O meu nome é ${nome} e atualmente sou ${cargo} na ${empresa}`;
  return frase;
}

// Agora a variável 'trabalho' vai receber a string retornada pela função.
let trabalho = nomeAddCargo(
  "Fernando",
  "Associate Software Engineer",
  "Nubank"
);

// E aqui fora nós decidimos o que fazer com ela, como por exemplo, imprimir no console.
console.log(trabalho);

console.log(`--- Fim do Exerçicio de função com 'return'em JavaScript ---- `);
