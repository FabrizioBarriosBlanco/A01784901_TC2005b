//Ejercicio 9
//Fabrizio Barrio Blanco

function longitudCadenaMasCorta(cadenas) {
    if (cadenas.length === 0) {
        throw new Error("La lista no debe estar vacía");
    }

    let longitudMinima = Infinity; // Iniciar con un valor muy grande

    for (let cadena of cadenas) {
        if (cadena.length < longitudMinima) {
            longitudMinima = cadena.length; // Actualizar la longitud mínima encontrada
        }
    }

    return longitudMinima;
}

//Casos prueba

//Caso 1
console.log(longitudCadenaMasCorta(["hola", "sol", "programacion", "si"])); 
//Caso 2
console.log(longitudCadenaMasCorta(["interfaz", "usuario", "sol", "yo"])); 
//Caso 3
console.log(longitudCadenaMasCorta(["elefante", "perro", "gato"])); 
