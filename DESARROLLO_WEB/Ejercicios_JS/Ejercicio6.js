//Ejercicio 6
//Fibrizio Barrios Blanco -A01784901

function aHackerSpeak(frase) {
    let traduccion = "";
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];
        switch (caracter.toLowerCase()) {  
            case 'a':
                traduccion += '4';
                break;
            case 'e':
                traduccion += '3';
                break;
            case 'i':
                traduccion += '1';
                break;
            case 'o':
                traduccion += '0';
                break;
            case 's':
                traduccion += '5';
                break;
            default:
                traduccion += caracter;  
                break;
        }
    }
    return traduccion;
}

//Casos prueba
//Caso 1
console.log(aHackerSpeak("Javascript es divertido")); 
//Caso 2
console.log(aHackerSpeak("Transforma esta cadena")); 
//Caso 3
console.log(aHackerSpeak("Hello World"));            
