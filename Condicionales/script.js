

function cambiarTexto() {
    document.getElementById("hola").innerText = "Hola, soy un texto cambiado";
}

// 📝 Ejercicio 1: Mayor de 3 números
// Escribe un programa que reciba tres números y diga cuál es el mayor.

let num1 = 6;
let num2 = 3;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " es mayor que " + num2 + " y que " + num3 );
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " es mayor que " + num1 + " y que " + num3);
} else {
    console.log(num3 + " es mayor que " + num1 + " y que " + num2);
}



// 📝 Ejercicio 2: Clasificación de edad
// Escribe un programa que reciba una edad y diga: Si es menor de 13: "Niño" , Si tiene entre 13 y 17: "Adolescente" , Si tiene entre 18 y 59: "Adulto" , Si tiene 60 o más: "Adulto mayor"

let edad = 60;

if (edad < 13) {
    console.log("Eres un niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Eres un adolescente");    
} else if (edad >= 18 && edad <= 59) {
    console.log("Eres un adulto");
} else if (num1 === num2 && num1 === num3) {   // Sugerencia (mejora opcional): Agrega una verificación si hay números iguales como caso extra:
    console.log("Los tres números son iguales");
} else {
    console.log("Eres un adulto mayor");
}



// 📝 Ejercicio 3: Calculadora de precios con descuento
// Si una compra es mayor a $100, aplica un 10% de descuento. Muestra el precio final.

let total = 245;

if (total > 100) {
    let descuento = total * 0.10;
    let totalFinal = (total - descuento).toFixed(2); // Sugerencia de mejora opcional: Podrías usar .toFixed(2) para que el total final tenga solo dos decimales (como un precio real)
    console.log("Gracias por su consumo se aplica 10% de descuento a su cuenta, precio final: " + totalFinal);
} else {
    console.log("Gracias por su consumo, Su total es de: " + total);
}



// 📝 Ejercicio 4: Adivina el número
// El programa debe tener una variable con un número secreto (ej. 7), y otra con el número que el usuario intenta adivinar. Dile si acertó o no.


let numSecreto10 = 7;
let numUsuario10 = 7;

if (numUsuario10 === numSecreto10) {
    console.log("Adivinaste el número secreto");
} else {
    console.log("Sigue intentando");
}

// 🧪 Extra: ¿Quieres hacerlo con input y botón en HTML? Aquí te dejo la estructura por si quieres probarlo en una página web:

let numSecreto = 9;

function secreto() {
    let numUsuario = Number(document.getElementById("numUser").value);
    let resultado = document.getElementById("mostrarResultado");

    // console.log(typeof numUsuario);
    // console.log(typeof resultado);


    if (numUsuario === numSecreto) {
        resultado.innerText = "🎉 ¡Adivinaste el número secreto!";
    } else if (numUsuario > numSecreto) {
        resultado.innerText = "📉 Te pasaste, intenta con un número menor.";
    } else {
        resultado.innerText = "📈 Muy bajo, intenta con un número mayor.";
    }

}


// 🧪 Ejercicio 5: Validar contraseña 📌 Enunciado:
// Tienes una contraseña guardada en una variable (por ejemplo: "1234"). El usuario escribe una contraseña en un input. Al hacer clic:
// Si es igual a la guardada: mostrar "Acceso concedido"
// Si no: mostrar "Contraseña incorrecta"

let passwordGuardada = "12345abc";

function verificarPassword() {
    let passwordUsuario = document.getElementById("passUser").value;
    let mensaje01 = document.getElementById("mensajePassword");

    if (passwordUsuario === passwordGuardada) {
        mensaje01.innerText = "OK, Puedes ingresar";
    } else {
        mensaje01.innerText = "Contraseña incorrecta";
    }
}






