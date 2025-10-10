
// Ejercicio 1
let numUser = -3;
const resultado1 = numUser > 0 ? "Tu número es Positivo" : (numUser === 0 ? "Tu numero es Cero" : "Tu número es Negativo");
console.log(resultado1);

// Ejercicio 2
let calif = 6;
const resultado2 = calif >= 6 ? "Haz Aprobado" : "Haz Reprobado";
console.log(resultado2);

// Ejercicio 3
let año = 2000;
const resultado3 = (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) ? "Es bisiesto" : "No es bisiesto";
console.log(resultado3);

// NOTA: Estuvo dificil lo tuve que investigar
// 🧠 Lógica para saber si un año es bisiesto:
// Un año es bisiesto si: Es divisible entre 4, y no es divisible entre 100, o sí es divisible entre 400.



// Pasos para el cálculo
// División por 4: Toma el año y divídelo por 4. Si no es divisible por 4, no es bisiesto. 
// División por 100: Si es divisible por 4, verifica si también es divisible por 100. 
// Si es divisible por 100, entonces no es bisiesto, a menos que: 
// División por 400: Verifica si este año divisible por 100 es también divisible por 400. 
// Si es divisible por 400, entonces sí es bisiesto. 





// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof resultado);

function sumar() {
    let num1 = Number(document.getElementById("num1a").value);
    let num2 = Number(document.getElementById("num2a").value);

        // Verifica que los valores sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return; // Sale de la función si los valores no son correctos
    }

    let resultado = (num1 + num2).toFixed(2);
    document.getElementById("mensajeSuma").innerText = "Aquí esta el resultado: " + resultado;

}
