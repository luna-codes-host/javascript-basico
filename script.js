//Funcion para mostrar un cuadro de dialogo emergente
//alert muestra el dialogo
function mostrarMensaje(){
    alert("Hola mundo :3 ");
}

function imprimirVariables(){
    let nombre ="Alenisse";
    let edad = 21;
    //Forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x")
    //Forma moderna
    console.log(`nombre: ${nombre}, edad: ${edad}`);
}

function arreglo(){
    //areglo
    let frutas = ['manzana','pera', 'banana']
    for(let f of frutas){
        console.log(f)
    }
    if (frutas[1] === 'pera'){
        console.log("La segunda fruta es una pera");
    } else{
        console.log('no es una pera');
    }
}