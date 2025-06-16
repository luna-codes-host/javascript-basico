
// Función para mostrar un cuadro de diálogo emergente
function mostrarMensaje() {
    alert("Hola Mundo :)");
}

// VARIABLES
function imprimirVariables() {
    let nombre = "Marcelo";
    let edad = "22";

    console.log("nombre:", nombre);
    console.log("edad:", edad);

    // Forma correcta de concatenar cadenas usando template literals
    console.log(`nombre: ${nombre}, edad: ${edad}`);

    console.error("Error: BLA BLA BLA");
    console.warn("Advertencia: x x x");
}
function arreglos(){
    let frutas = ['Manzana', 'Pera', 'Banana'];
    //BUCLE
    for(let f of frutas){
        console.log(f)
    }
    //CONDICIONALES
    if(frutas[1] ==='pera'){
        console.log("La segunda fruta es una pera");
    } else{
        console.log('NO es una PERA');
    }
}
//Agreagar evento a un elemento html
document.getElementById("btnSaludar").addEventListener(
    "click" , function () {
        console.log("Hola");
    }
)
//Modificar al html a traves del DOM
document.getElementById("btnAgregar").addEventListener(
    "click" , () => {
        //Obtener el elemento "lista" (ul) del documento HTML
        lista  = document.getElementById("lista");
        //Creando un nuevo elemento HTML, li= list item
        let nuevoItem = document.createdElement("li");
        //Obteniendo el total de items de la lista
        let totalItems = lista.childElementCount;
        //Agregando un contenido (texto) al item
        nuevoItem.textContent = 'Item ${totalItems +1}';
        //Agregando item de la lista
        lista.appendChild(nuevoItem)
    }
);

document.getElementById("btnAddPalabra").addEventListener(
    "click", addPalabraLista
);

function addPalabraLista(){
    // Obtener el input del HTML
    let input = document.getElementById("txtEntrada");
    // Obtner el valor del input
    const texto = input.value.trim();
    // Transformar a mayusculas
    const textMayuscula = texto.toUpperCase();
    // Agregar item a la lista
    let lista = document.getElementById("lstPalabras");
    // Creando un nuevo elemento HTML, li = list item
    let nuevoItem = document.createElement("li");
    // Agregando un contenido (texto) al item
    nuevoItem.textContent = textMayuscula;
    // Agregar item a la lista
    lista.appendChild(nuevoItem);
}