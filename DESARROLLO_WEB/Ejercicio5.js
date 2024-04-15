//Ejericio 5
// Fabrizio Barrios Blanco - A01784901

function mcd(a,b){
    if(typeof a != 'number' || !Number.isInteger(a)){
        throw TypeError('Necesito un numero');
    }
    if(typeof b != 'number' || !Number.isInteger(b)){
        throw TypeError('Necesito un numero');
    }
    a= Math.abs(a);
    b= Math.abs(b);

    let c;

    while(b){
        c = b;
        b = a % b;
        a = c
    }
    return x;
}

//Casos prueba
//Caso 1

console.log("MCD de 48 y 18:", mcd(48, 18));
//Caso 2

console.log("MCD de -24 y 36:", mcd(-24, 36)); 
//Caso 3

console.log("MCD de 13 y 17:", mcd(13, 17)); 
