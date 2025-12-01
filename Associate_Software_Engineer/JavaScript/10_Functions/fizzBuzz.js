let num = parseInt(inp); // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!");

function fizzbuzz(num) {
  // A ordem é importante: a condição mais específica vem primeiro.
  if (num % 3 === 0 && num % 7 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 7 === 0) {
    return "Buzz";
  } else {
    // Se nenhuma das condições acima for verdadeira, retorna o próprio número.
    return String(num);
  }
}

console.log(fizzbuzz(num));
