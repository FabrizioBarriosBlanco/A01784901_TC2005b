//Ejericio 1
//Fabrizio Alcides Barrios Blanco - A01784901

function caracterRepetido(){
    if (typeof texto != 'string'){
        throw TypeError ('Error');
    }
let caracteres = texto.split('');
let resultado = '';
let contador = 0;

for(let i = 0; i< caracteres.length; ++i){
    contador = 0;
    
    for(let j = 0; j< caracteres.length; ++j){
        if (caracteres[i] == caracteres[j]){
            ++contador;
        }
    }
    if (contador < 2){
        return caracteres[i];
    }
}
}
// Caso de prueba 1: 
let texto = "abacddbec";
console.log(caracterRepetido()); 

// Caso de prueba 2: 
texto = "abc";
console.log(caracterRepetido()); 

// Caso de prueba 3: s
texto = "apple";
console.log(caracterRepetido()); 
