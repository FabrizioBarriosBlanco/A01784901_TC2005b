//ordenar lista de numeros
//Fabrizio Barrios Blanco - A01784901

function burbuja(){
    
    let i, n, j, aux;
    
    n=lista.length;

    for(j = 1; j<n; j++){
        for(i=0;i<(n-j); i++){
            if(lista[i] > lista[i+1]){
                aux = lista[i]
                lista[i] = lista[i+1];
                lista[i+1] = aux;
            }
        }
    }
    console.log(lista);
}
// Caso de prueba 1: 
let lista = [7, 6, 5, 4, 3, 2, 1];
burbuja();

// Caso de prueba 2: 
lista = [5, 5, 5, 5, 5, 5, 5];
burbuja();  

// Caso de prueba 3: 
lista = [-3, 1, -2, 7, -5, 8, 2];
burbuja();  
