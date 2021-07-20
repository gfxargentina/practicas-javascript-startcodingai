// 1) Pedir al usuario que ingrese su nombre. guardar ese nombre en una variable
// y utilizarlo para saludar al usuario (e,: "Hola luis")
/*
const firstName = prompt('Cual es tu nombre');
console.log(`Hola ${firstName}`);
*/

// 2) Pedir al usuario que ingrese 2 numeros y devolverle la suma de dichos numeros
/*
const firstNumber = prompt('ingrese el primer numero');
const secondNumber = prompt('ingrese el segundo numero');
const result = +firstNumber + +secondNumber;
console.log(`La suma de ${firstNumber} y ${secondNumber} es ${result} `);
*/

// 3) Pedir al usuario que ingrese 2 numeros y devolverle  el doble de la suma de dichos numeros
/*
const firstNumber = prompt('ingrese el primer numero');
const secondNumber = prompt('ingrese el segundo numero');
const result = (+firstNumber + +secondNumber) * 2;
console.log(`el doble de la suma de ${firstNumber} + ${secondNumber} es ${result}`);
*/

// 4) Pedir al usuario que ingrese el ancho y el alto de una habitacion
// y calcular la superficie

const habitacionAlto = prompt('ingrese el alto de la habitacion');
const habitacionAncho = prompt('ingrese el ancho de la habitacion');
const result = habitacionAlto * habitacionAncho;
console.log(`La superficie de la habitacion es de ${result} metros`);

// 5) Pedir al usuario que ingrese su nombre en mayusculas y devolverle el nombre todo en minisculas
/*
const firstName = prompt('Porfavor ingrese su nombre completo en mayusculas');
const result = firstName.toLowerCase();
console.log(result);
*/

// 6) Pedir al usuario que ingrese su apellido y devolverle el apellido todo en mayusculas
/*
const lastName = prompt('Porfavor ingrese su apellido');
result = lastName.toUpperCase();
console.log(result);
*/

// 7) Pedir al usuario que ingrese su nombre , apellido y la edad , mostrar el siguiente mensaje:
/* 
Nombre: Juan
Apellido: Perez
Edad: 21
*/
/*
const firstName = prompt('Ingrese su nombre');
const lastName = prompt('Ahora ingrese su apellido');
const age = prompt('y ahora su edad');
console.log(`Nombre: ${firstName}
Apellido: ${lastName}
Edad: ${age}
`);
*/
