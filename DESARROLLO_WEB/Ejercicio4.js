//Ejercicio 4
//Fabrizio Barrios Blanco -A01784901

function mayuscula(frase) {
    if(typeof frase != 'string'){
        throw TypeError('Ingresa una cadena de caracteres');
    }
    let palabras = frase.split(' ');
    return palabras.map(p => p[0].toUpperCase()+ p.slice(1)).join(' ');
}
//Casos prueba

let resultado1 = mayuscula("hola mundo");
let resultado2 = mayuscula("bienvenidos");
let resultado3 = mayuscula("hola como estas");

console.log(resultado1);  
console.log(resultado2); 
console.log(resultado3);  
