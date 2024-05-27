//Ejericio 11
//Fabrizio Barrio Blanco

function ordenarAlfabeticamente(listaCadenas) {
    let listaOrdenada = [];

    for (let i = 0; i < listaCadenas.length; i++) {
        let cadenaActual = listaCadenas[i];
        let insertado = false;

        for (let j = 0; j < listaOrdenada.length; j++) {
            if (cadenaActual < listaOrdenada[j]) {
                for (let k = listaOrdenada.length; k > j; k--) {
                    listaOrdenada[k] = listaOrdenada[k - 1];
                }
                listaOrdenada[j] = cadenaActual;
                insertado = true;
                break;
            }
        }

        if (!insertado) {
            listaOrdenada.push(cadenaActual);
        }
    }

    return listaOrdenada;
}

//Casos prueba

//Caso 1
let cadenas1 = ["perro", "gato", "elefante", "abeja"];
let resultado1 = ordenarAlfabeticamente(cadenas1);
console.log(resultado1);

//Caso 2
let cadenas2 = ["manzana", "banana", "pera", "naranja"];
let resultado2 = ordenarAlfabeticamente(cadenas2);
console.log(resultado2);

//Caso 3

let cadenas3 = ["rojo", "verde", "azul", "amarillo"];
let resultado3 = ordenarAlfabeticamente(cadenas3);
console.log(resultado3);
