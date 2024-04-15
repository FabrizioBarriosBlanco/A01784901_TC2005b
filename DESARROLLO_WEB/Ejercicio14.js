//Ejercicio 14
//Fabrizio Barrio Blanco

function esPotenciaDeDos(numero) {
    if (numero <= 0) {
        return false; 
    }

    while (numero > 1) {
        if (numero % 2 !== 0) {
            return false; 
        }
        numero /= 2;
    }

    return true;
}

// Casos de prueba

let numero1 = 16;
let resultado1 = esPotenciaDeDos(numero1);
console.log(resultado1); // Debería ser true

let numero2 = 25;
let resultado2 = esPotenciaDeDos(numero2);
console.log(resultado2); // Debería ser false

let numero3 = 128;
let resultado3 = esPotenciaDeDos(numero3);
console.log(resultado3); // Debería ser true
