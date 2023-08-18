let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

meses.forEach((dato) => {
  console.log(`${dato}`);
});

var valores = [true, 5, false, "hola", "adios", 2];

let word = "";
valores.forEach((valor) => {
  if (typeof valor === "string") {
    if (word.length < valor.length) {
      word = valor;
    }
  }
});
console.log(`${word} es mayor`);

valores.forEach((valor) => {
  if (valor === true) {
    console.log(`El valor es ${valor}`);
  } else if (valor === false) {
    console.log(`El valor es ${valor}`);
  }
});
let numeros = valores.filter((item) => typeof item === "number");
console.log(
  `La suma es de ${numeros[0] + numeros[1]}\nLa division es de ${
    numeros[0] / numeros[1]
  }\nLa multiplicacion es de ${numeros[0] * numeros[1]}\nLa resta es de ${
    numeros[0] - numeros[1]
  }`
);

var numero1 = 5;
var numero2 = 9;
if (numero1 > numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}

if (numero1 < 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if (numero2 - 1 > numero1) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}

let numeroFactorial = 5;
let counting = numeroFactorial;
for (let i = 0; i < numeroFactorial; i++) {
  if (i == 0) {
    resultado = counting * (counting - 1);
    counting -= 2;
  } else if (counting != 0) {
    resultado *= counting;
    counting -= 1;
  }
}

console.log(`Resultado del factorial de ${numeroFactorial} es de ${resultado}`);

function validar() {
  const valorDeInput = document.getElementById("valor").value;
  if (valorDeInput % 2 == 0) {
    alert("El numero es par");
  } else {
    alert("El valor es impar");
  }
}

function validaCadena() {
  cadena = document.getElementById("cadena").value;
  if (cadena === cadena.toUpperCase()) {
    alert("La cadena está formada solo por mayúsculas.");
  } else if (cadena === cadena.toLowerCase()) {
    alert("La cadena está formada solo por minúsculas.");
  } else {
    alert("La cadena es una mezcla de mayúsculas y minúsculas.");
  }
}
