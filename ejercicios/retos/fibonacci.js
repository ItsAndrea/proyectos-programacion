// Escribe un programa que imprima los 50 primeros numeros
// de la sucesion de Fibonacci empezando en 0. 
// El siguiente siempre es la suma de los 2 anteriores. 

var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 50; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}