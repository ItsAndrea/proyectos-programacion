// Escribe una funcion que reciba dos strings y retorne 
// verdadero o falso(bool) segun sean o no anagramas

function isAnagram(wordOne, wordTwo) {
    if(wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("")) {
        console.log(true);
    } else{console.log(false);}
}

isAnagram("roma", "AmOR");
isAnagram("azul", "piedra");
isAnagram("roma", "nada");