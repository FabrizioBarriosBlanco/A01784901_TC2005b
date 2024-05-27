//Ejericio7
//Fabrizio Barrios Blanco

function factoriza(numero) {
    let factores = [];
   
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            factores.push(i);
        }
    }
    factores.push(numero);  
    return factores;
}

//Casos Prueba
//Caso 1
console.log(factoriza(12)); 
//Caso 2
console.log(factoriza(28)); 
//Caso 3
console.log(factoriza(13)); 
