//Ejericio3
//Fabrizio Barrios Blanco - A01784901

function invertirNuevoArreglo(arreglo) {
    let nuevoArreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo;
}

function invertirArregloOriginal(arreglo) {
    let temp;
    let n = arreglo.length;
    for (let i = 0; i < n / 2; i++) {
        temp = arreglo[i];
        arreglo[i] = arreglo[n - 1 - i];
        arreglo[n - 1 - i] = temp;
    }
}
//InvertirNuevoArreglo
// Caso de prueba 1: 
let arregloMixto = [10, -20, 30, -40, 50];
let resultadoMixto = invertirNuevoArreglo(arregloMixto);
console.log("Resultado Mixto:", resultadoMixto);  

// Caso de prueba 2: 
let arregloDecimales = [1.1, 2.2, 3.3, 4.4, 5.5];
let resultadoDecimales = invertirNuevoArreglo(arregloDecimales);
console.log("Resultado Decimales:", resultadoDecimales); 

//invertirArregloOriginal

// Caso de prueba 1: 
let arregloNegativos = [-1, -2, -3, -4, -5];
invertirArregloOriginal(arregloNegativos);
console.log("Arreglo Negativos Invertido:", arregloNegativos);  

// Caso de prueba 2: 
let arregloCerosPositivos = [0, 0, 1, 0, 0];
invertirArregloOriginal(arregloCerosPositivos);
console.log("Arreglo Ceros y Positivos Invertido:", arregloCerosPositivos);  
