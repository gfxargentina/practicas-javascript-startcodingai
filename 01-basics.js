// 1) Pedir al usuario que ingrese su nombre. guardar ese nombre en una variable
// y utilizarlo para saludar al usuario (e,: "Hola luis")

const firstName = prompt('Cual es tu nombre');
console.log(`Hola ${firstName}`);

// 2) Pedir al usuario que ingrese 2 numeros y devolverle la suma de dichos numeros
const firstNumber = prompt('ingrese el primer numero');
const secondNumber = prompt('ingrese el segundo numero');
const result = +firstNumber + +secondNumber;
console.log(`La suma de ${firstNumber} y ${secondNumber} es ${result} `);

// 3) Pedir al usuario que ingrese 2 numeros y devolverle  el doble de la suma de dichos numeros
