var tempo;
var apreto = false;
var operador;
function doOperacion(operadorActual) {
  operador = operadorActual;
  tempo = document.getElementById("valorCaja").value;
  //   alert(typeof operadorActual);
  //   if (typeof operadorActual === "string") {
  //     alert("Yeap, es String");
  //   }
  document.getElementById("valorCaja").value = "";
}

function colocar(numero) {
  const temp = document.getElementById("valorCaja").value;
  var dot = temp.includes(".");
  if (!dot) {
    document.getElementById("valorCaja").value = temp + numero;
  }
  if (typeof numero === "number") {
    document.getElementById("valorCaja").value = temp + numero;
  }
}

function doCalc() {
  //   alert("Valor anterior " + tempo);
  const temp = document.getElementById("valorCaja").value;
  //   alert("Valor anterior " + tempo + " Valor actual " + temp);
  returnTheResult(tempo, temp);
}

function returnTheResult(anterior, nuevo) {
  let resultado;
  //   alert("La operacion es: " + operador);
  //   alert("Valor anterior " + anterior + " Valor actual " + nuevo);
  if (operador == "/") {
    resultado = Number(anterior) / Number(nuevo);
  }
  if (operador == "x") {
    resultado = Number(anterior) * Number(nuevo);
  }
  if (operador == "-") {
    resultado = Number(anterior) - Number(nuevo);
  }
  if (operador == "+") {
    resultado = Number(anterior) + Number(nuevo);
  }
  document.getElementById("valorCaja").value = resultado;
}

function limpiar() {
  document.getElementById("valorCaja").value = "";
}
