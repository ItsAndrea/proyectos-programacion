//Escribe un programa que se encargue de comprobar si un # es o no primo.
// Hecho esto, imprime los # primos entre 1 y 100

function isPrime(number) {
  if (number <= 1) {
    return false + ` ${number}`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false + ` ${number}`;
    }
  }
  return true + ` ${number}`;
}