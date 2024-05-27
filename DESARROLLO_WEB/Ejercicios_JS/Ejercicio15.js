//Ejercicio 15
//Fabrizio Barrios BLanco

function ordenDescendente(listaNumeros) {
    let listaOrdenada = []; 
    for (let numero of listaNumeros) {
        let insertado = false;
        for (let i = 0; i < listaOrdenada.length; i++) {
            if (numero > listaOrdenada[i]) {
                for (let j = listaOrdenada.length; j > i; j--) {
                    listaOrdenada[j] = listaOrdenada[j - 1]; 
                }
                listaOrdenada[i] = numero;
                insertado = true;
                break;
            }
        }
        if (!insertado) {
            listaOrdenada.push(numero);
        }
    }

    return listaOrdenada;
}

// Casos de prueba
let numeros1 = [3, 1, 5, 2, 4];
let resultado1 = ordenDescendente(numeros1);
console.log(resultado1);

let numeros2 = [10, 20, 5, 15, 25];
let resultado2 = ordenDescendente(numeros2);
console.log(resultado2); 

let numeros3 = [7, 6, 9, 8, 10];
let resultado3 = ordenDescendente(numeros3);
console.log(resultado3); 
