//Ejericio 12
//Fabrizio Barrio Blanco

function calcularMedianaYModa(listaNumeros) {
   
    function ordenarLista(lista) {
        let listaOrdenada = [];
        for (let i = 0; i < lista.length; i++) {
            let insertado = false;
            for (let j = 0; j < listaOrdenada.length; j++) {
                if (lista[i] < listaOrdenada[j]) {
                    listaOrdenada = insertarEnPosicion(listaOrdenada, j, lista[i]);
                    insertado = true;
                    break;
                }
            }
            if (!insertado) {
                listaOrdenada.push(lista[i]);
            }
        }
        return listaOrdenada;
    }

    function insertarEnPosicion(lista, indice, elemento) {
        let nuevaLista = [];
        for (let i = 0; i < lista.length; i++) {
            if (i === indice) {
                nuevaLista.push(elemento);
            }
            nuevaLista.push(lista[i]);
        }
        if (indice === lista.length) {
            nuevaLista.push(elemento);
        }
        return nuevaLista;
    }

    function contarFrecuencia(lista) {
        let conteo = {};
        for (let i = 0; i < lista.length; i++) {
            let numero = lista[i];
            if (conteo[numero] === undefined) {
                conteo[numero] = 1;
            } else {
                conteo[numero]++;
            }
        }
        return conteo;
    }

    // Mediana
    let listaOrdenada = ordenarLista(listaNumeros);
    let mediana;
    let mitad = parseInt(listaOrdenada.length / 2);

    if (listaOrdenada.length % 2 === 0) {
        mediana = (listaOrdenada[mitad - 1] + listaOrdenada[mitad]) / 2;
    } else {
        mediana = listaOrdenada[mitad];
    }

    //Moda
    let conteoNumeros = contarFrecuencia(listaNumeros);
    let moda;
    let maxFrecuencia = 0;
    for (let numero in conteoNumeros) {
        if (conteoNumeros[numero] > maxFrecuencia) {
            moda = parseInt(numero);
            maxFrecuencia = conteoNumeros[numero];
        }
    }

    return { mediana, moda };
}

// Casos de prueba
let numeros1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
let resultado1 = calcularMedianaYModa(numeros1);
console.log(resultado1);

let numeros2 = [2, 3, 3, 5, 6, 6, 6, 7, 8, 9];
let resultado2 = calcularMedianaYModa(numeros2);
console.log(resultado2);

let numeros3 = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7];
let resultado3 = calcularMedianaYModa(numeros3);
console.log(resultado3);
