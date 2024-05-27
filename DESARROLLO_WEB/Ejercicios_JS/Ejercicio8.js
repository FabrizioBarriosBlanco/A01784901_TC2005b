//Ejercicio 8
//Fabrizio Barrio Blanco - A01784901

function quitaDuplicados(arreglo) {
    let unicos = [];
    let visto = {};

    for (let i = 0; i < arreglo.length; i++) {
        let elemento = arreglo[i];
        if (!visto[elemento]) {
            unicos.push(elemento);
            visto[elemento] = true;  
        }
    }

    return unicos;
}

//Casos prueba

//Caso 1
console.log(quitaDuplicados([1, 0, 1, 1, 0, 0])); 

//Caso 2
console.log(quitaDuplicados([2, 3, 4, 2, 3, 4, 4])); 

//Caso 3
console.log(quitaDuplicados(['apple', 'banana', 'apple', 'orange']));
