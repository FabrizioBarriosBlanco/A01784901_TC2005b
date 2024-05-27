//Ejercicio 13
//Fabrizio Barrios Blanco

function cadenaMasFrecuente(listaCadenas) {
      function contarFrecuenciaCadenas(lista) {
        let conteo = {};
        for (let i = 0; i < lista.length; i++) {
            let cadena = lista[i];
            if (conteo[cadena] === undefined) {
                conteo[cadena] = 1;
            } else {
                conteo[cadena]++;
            }
        }
        return conteo;
    }
  
    let conteoCadenas = contarFrecuenciaCadenas(listaCadenas);
    let cadenaMasFrecuente;
    let maxFrecuencia = 0;
    for (let cadena in conteoCadenas) {
        if (conteoCadenas[cadena] > maxFrecuencia) {
            cadenaMasFrecuente = cadena;
            maxFrecuencia = conteoCadenas[cadena];
        }
    }

    return cadenaMasFrecuente;
}

// Casos de prueba
let cadenas1 = ["hola", "adios", "hola", "hola", "buenos días"];
let resultado1 = cadenaMasFrecuente(cadenas1);
console.log(resultado1);

let cadenas2 = ["gato", "perro", "gato", "gato", "ratón"];
let resultado2 = cadenaMasFrecuente(cadenas2);
console.log(resultado2);

let cadenas3 = ["rojo", "azul", "verde", "azul", "azul"];
let resultado3 = cadenaMasFrecuente(cadenas3);
console.log(resultado3);
