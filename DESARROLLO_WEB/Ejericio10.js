//Ejercicio 10
//Fabrizio Barrios Blanco

function esPalindromo(texto) {
    texto = texto.toLowerCase(); 
    let izquierda = 0;
    let derecha = texto.length - 1;

    while (izquierda < derecha) {
        if (texto[izquierda] !== texto[derecha]) {
            return false; 
        }
        izquierda++;
        derecha--;
    }

    return true;
}

//Casos prueba
//Caso 1
console.log(esPalindromo("Anita lava la tina")); 
//Caso 2
console.log(esPalindromo("12321"));
//Caso 3
console.log(esPalindromo("Hola mundo")); 
