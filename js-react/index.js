// const sumar = (x, y) =>  x + y;
// const randomNumber = () => 4;
// const showObject = () => ({age: 33}) //No olvidar los PARENTESIS

// console.log(showObject());
// console.log(randomNumber());
// document.body.innerText = 'Numero random';

// console.log(function (){
//     return "starting...";
// }());

// const color = "white";
// const isGay = true;

// // Crear un elemento en HTML
// const btn = document.createElement('button');
// btn.innerText = 'Are you gay? - The Test';
// document.body.append(btn);
// // Crear un elemento en HTML
// const title = document.createElement('h1');
// title.innerText = 'Mis apuntes de JS para React';
// document.body.append(title);
// // Crear un elemento en HTML
// const paragraph = document.createElement('p');
// paragraph.innerText = "Esto es los fundamentos que debo aprender para aprender react de js";
// document.body.append(paragraph);
// // Estilos 'en linea' en JS 

// // Usamos un evento con una funcion de flecha ahorrando el else
// btn.addEventListener('click', () =>{
//     if(isGay){
//         btn.style = "background:green; color:black";
//         return alert("You are");
//     }
//     alert("Nope");
//     btn.style = `background: ${isGay ? background:'red'}; color: ${color}`;
// });

// Metodos de los arreglos - Los arreglos permiten listar elementos
// forEach - Utilizado mucho para recorrer arreglos
// map - Sirve para devolver algo a traves de una condicion
// find - Usado para buscar algo que indiques y retornarlo
// filter - filtrar datos a traves de condiciones y retornarlos
// concat - Usado para unir dos arreglos y retornarlos

// const country = {
//     name: 'Colombia',
//     capital: 'Bogota',
//     nationality: 'Colombian'
// }

// const countryData = {
//     population: 12345,
//     language: 'Spanish'
// }

// const colombia = {
//     ...country,
//     ...countryData
// };
// console.log(names.concat(surnames));

// Spread Operator
// Recientemente js hizo un spread operator que nos ahorra codigo y permite unir arreglos y retornarlos. Es un metodo concat corto//

// console.log(colombia);

// Ecmascript Modules
// Forma de dividir una app en multiples archivos

// import {add, resta, hola, newTitle, colombia} from './ecmascript.js'

// console.log(add(10,45678));
// console.log(resta(2788, 134));
// console.log(hola('Andrea'));
// console.log(newTitle);
// console.log(colombia);

// Optional Chaining
// Caracteristica de JS que sirve mucho cuando traemos datos del BACKEND

// const country = {
//     name: 'Colombia',
//     capital: 'Bogota',
//     nationality: 'Colombian',
//     colors: {
//         color: 'red'
//     }
// }

// console.log(country.moreColors?.color); // <- Optional Chaining

// Async - Await
const ul = document.createElement('ul');

async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function (post){
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    })
}
document.body.append(ul);
console.log("Primero me cargo yo");

loadData();