// Ecmascript Modules
// Forma de dividir una app en multiples archivos

export function add(x=0,y=0){
    return x + y;
}

export function resta(a=0,b=0){
    return a+b;
}

export function hola(nombre){
    return 'Hola ' + nombre;
}

export const newTitle = 'Mi titulo exportado';

const country = {
    name: 'Colombia',
    capital: 'Bogota',
    nationality: 'Colombian'
}

const countryData = {
    population: 12345,
    language: 'Spanish'
}

export const colombia = {
    ...country,
    ...countryData
};