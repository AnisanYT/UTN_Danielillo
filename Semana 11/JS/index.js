//Metodo de para poner un pop up en el navegador 
alert('Hola mundo');
//Variable: string, number, boolean, [], date
//Tipo de objetos: 
//Diferencia entre el var y el let es el scope (Ambito)

if (true) {
    var nombre = 'Danielito';
    let apellido = 'Mejía';
}

alert(nombre);
//alert(apellido);

let bandera = true;
let edad = 21;

let precio = 3.33;

let lista = [];

let fecha = new Date().getMonth() + 1;
alert(fecha);
//Coersion 5="5"
//Cuando hago el === compara primero el tipo del dato y luego el valor
// El tipo de dato es diferente al otro? (!==)
if (5 !== "5") {
    alert("Siuu");
} else {
    alert("Nouuu");
}

const PI = 3.14;
const Persona = {
    cedula: '604730830',
    nombre: 'Daniel',
    apellido: 'Mejia',
    apellido2: 'Calderon',
    edad: 21
};
//String template
alert(`El nombre de la persona es ${Persona.nombre} y su cedula es ${Persona.cedula}`);

let tiene = Persona.hasOwnProperty('edad');
alert(tiene);

let tienePerro;
alert(tienePerro);
// tienePerro= null;


// Si no tiene valor es decir que esta undefinied, le dira que no tiene perro
// en cambio si es diferente a undefinied entonces le dira que si tiene valo
// haciendo una validacion del dato.

if (tienePerro) {
    alert('Tine perro');
} else {
    alert('No tiene perro');
}

let listaColores = ['Rojo', 'Verde', 'Azul'];

alert(listaColores[1]);
alert(listaColores[1].length);

// for(let i=0; i=listaColores.length; i++){
//     console.log(listaColores[i]);
// }

console.log('Foreach');
listaColores.forEach((valor, index) => {
    if (index % 2 == 0) { //Si el valor es par o impar
        console.log(`El valor es ${valor} y el indice es ${index}`);
    }

});

console.log('Map')
listaColores.map((valor, index) => {
    console.log(`El valor es ${valor} y el indice es ${index}`);
}).filter(x=>{x=='Rojo'});

const listaPersonas = [{
    id:'666',
    nombre:'Daniel',
    apellido:'José',
    edad:21
},
{
    id:'666655',
    nombre:'Christian',
    apellido:'Torrentes',
    edad:16
}];

const listaResult = listaPersonas.map((persona, index)=> {
    let datos = `Mi nombre es ${persona.nombre} y mi apellido es ${persona.apellido}`;
    return {
        id: index,
        cedula: persona.id,
        nombre: nombre, 
        edad: persona.edad
    }
}).filter(x=>x.edad>18);


console.log(...listaResult);
// function sayhiTwo() {
//     alert(prueba);
// };
// function sayhi() {
//     var prueba= 5
// };

// sayhiTwo();
// sayhi();

