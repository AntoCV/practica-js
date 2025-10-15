
// Ejercicio de la lección
const edadUsuario1 = 20;
const pasoExamenVision = true;
let puedeObtenerLicencia = edadUsuario1 >= 18 && pasoExamenVision;
console.log(puedeObtenerLicencia);


// Ejercicio 1 - Calculadora de Propinas (Básico)
let costoTotalCuenta = 250;
const porcentajePropina = 0.15; // (es el 15%)
let montoPropina = costoTotalCuenta * porcentajePropina;
let pagoFinal = costoTotalCuenta + montoPropina;
console.log(`El costo total es: ${costoTotalCuenta}, la propina es: ${montoPropina}, el pago final es: ${pagoFinal}.`);

// Ejercicio 2 - Verificador de Acceso a un Evento (Intermedio)
const edadMinima = 18;
let edadUsuario = 34;
const tieneBoleto = true;
const puedeIngresar = edadUsuario >= edadMinima && tieneBoleto;
console.log(`¿Puede ingresar al evento?: ${puedeIngresar}`);


// Ejercicio 3 - Lógica de Descuento para Clientes (Intermedio-Avanzado)
const esClienteFrecuente = false;
const montoCompra = 600;
const cuponDeDescuento = false;
let aplicaDescuento = cuponDeDescuento || (esClienteFrecuente && montoCompra >= 500);
console.log(`El cliente aplica para descuento: ${aplicaDescuento}`);



// Ejercicio 4 - Inversión de Estado (Avanzado)
// Recuerda la estructura del operador ternario: propiedad_a_cambiar = (condición) ? valor_si_es_true : valor_si_es_false;

const luz = {
    habitacion: "Sala de estar",
    estaEncendida: false,
    brillo: 0 
}

luz.estaEncendida = !luz.estaEncendida;

luz.brillo = luz.estaEncendida ? 100 : 0;
console.log(`El brillo es de: ${luz.brillo}`);

luz.brillo += 20;
console.log(`El nuevo brillo es de: ${luz.brillo}`);













// Ejercio para confirmar la conexión con el archivo script.js

let numeroOculto = 6;



function adivina () {
    let numRecibido = Number(document.getElementById("num").value);

    if (numRecibido === numeroOculto){
        document.getElementById("respAdivina").innerHTML = "¡¡¡Felicidades adivinaste el número oculto!!!";
    } else if (numRecibido > numeroOculto) {
        document.getElementById("respAdivina").innerText = "Vuelve a intentarlo te pasaste";
    } else {
        document.getElementById("respAdivina").innerHTML = "Vuelve a intentarlo te falto";
    }
}





let saludo =  "Hola";
console.log(saludo);
