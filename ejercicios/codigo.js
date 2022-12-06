// console.log("Hola Mundo!");
// console.log("Soy el primer script");
// // Se imprimen dos mensajes en la consola

// let mensaje = `Javascript \nHola Mundo!\nQué facil es incluir 'comillas simples'\n y "comillas dobles"`;
// alert(mensaje);

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
// console.log(array);
let i = 0;

// CONCENTRARME EN HACER EJERCICIOS DE ARREGLOS Y OBJETOS
// Usar un Ciclo while para Recorrer un Arreglo

console.log(meses[0]);

while (i < meses.length) {
    document.body.append(" ");
    document.body.append(meses[i]);
    // console.log(meses[i]);
    i++;
}

