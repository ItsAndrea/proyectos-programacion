// Escriba en consola si puedo pasar o no el semaforo

class Semaforo{
    constructor(azul, amarillo, rojo){
        this.azul = azul;
        this.amarillo = amarillo;
        this.rojo = rojo;
    }
    semaforo_azul(){
        if(azul){console.log("Puedes pasar, esta azul");}
    }
    semaforo_amarillo(){
        if(amarillo){console.log("Mejor espera, esta amarillo");}
    }
    semaforo_rojo(){
        if(rojo){console.log("Mejor espera, esta amarillo");}
    }
}

let conductor = new Semaforo("azul");

console.log(conductor.semaforo_azul());