// Escribe un programa que muestre por consola(con un print) 
//los numeros de 1 a 100, sustituyendo por "fizz", "buzz" o 
// "fizzbuzz". Segun corresponda.

// Si el numero que estoy imprimiendo es multiplo de 3 se usa "fizz"
// Si es multiplo de 5 por la palabra "buzz"
// Si es a la vez multiplo de 3 y 5 "fizzbuzz"

let i = 0;

while (i<=100) {
    var divisibleByThree = i % 3 == 0;
    var divisibleByFive = i % 5 == 0;

    if(divisibleByFive && divisibleByThree){
        console.log("fizzbuzz");
    } else if (divisibleByThree) {
        console.log("fizz");
    } else if (divisibleByFive) {
        console.log("buzz");
    } else {
        console.log(i);
    }

    i++;
}