var global = 0;
function accion() {
    //alert('Hola, querido amigo :D');
    
}
function enviarMensaje(mensaje, numero) {
    const valorInput = document.getElementById("valor").value;
    // Lo que pinta al obtener el valor de 5 es el value del boton
    const valorButton = document.getElementById("5").value;
    alert(`El mensanje es: ${mensaje} y el numero es: ${numero}, el valor que se
    dice en valor es: ${valorInput}, el valor el boton es ${valorButton} y 
    lo que devuelve el metodo es: ${partirMensaje()}`); 
    document.getElementById("valor").value = 20;

    global = valorButton; 
}

function cambiarColor() {
    const titulo = document.querySelector("#titulo");
    titulo.style.color="white";
    titulo.style.background="blue";
    alert(global);
    
}

function partirMensaje () {
    return "Mensaje partido";
}

const pero = {
    id : "",
    nombre : "",
    raza : ""
}

//obligatorio
function validar() {
const texto = document.getElementById("textoValidar").value;
    if (!texto) {
        alert('Lo siento, debes de insertar algo.');
        document.getElementById("nombre").focus();
        return false;
        } 
        document.getElementById("valor").value = "¡Excelente, haz rellenado con algo el espacio!";
        return true;
}

function validarNumero() {
    const valorNumerico = document.getElementById("numeroValidar").value;
    if(isNaN(valorNumerico)) {
        alert('Lo que hay en el campo no es un valor numerico')
        return false;
    }
    document.getElementById("valor").value = "¡Excelente, si es un valor numerico!";
    return true;
}

function validarLista() {
    const indice = document.getElementById("seleccionValidar").selectedIndex;
    if( indice == null || indice == 0 ) {
        alert('No has seleccionado nada aun, deberias de seleccionar algo');
        return false;
       }
    document.getElementById("valor").value = "¡Excelente, has seleccionado algo!";
    return true;
}

function validarEmail() {
    const valor = document.getElementById("emailValidar").value;
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
        alert('Lo siento, no es permitido ese formato');
     return false;
    } 
    document.getElementById("valor").value = "¡Excelente, has colocado bien el email!";
    return true;
}