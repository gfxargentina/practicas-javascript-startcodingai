/* 1) Crear un programa que pida al usuario que ingrese un numero y le devuelva un mensaje
indicando si el numero es positivo, negativo o si es 0 */
/*
//funcion numberType que recibe un numero que es un string linea 24
const numberType = (number) => {
	let message = '';
	//lo parsea de string a numero
	const parsedNumber = +number;

	//si cuando lo parseo me da NaN que es un valor false, lo niego para que me de true
	//y tiene que ser distinto a 0, porque 0 es otro valor false
	if (!parsedNumber && parsedNumber !== 0) {
		message = 'El valor ingresado no es un numero';
		return message;
	}

	//si es igual a 0
	if (parsedNumber === 0) {
		message = 'El numero ingresado es 0';
		//si es mayor a 0
	} else if (parsedNumber > 0) {
		message = 'El numero ingresado es positivo';
		//si no hago esto
	} else {
		message = 'El numero ingresado es negativo';
	}
	return message;
};

//le pido al usuario el numero y lo guardo en una variable
const chosenNumber = prompt('Ingrese un numero');
//le paso lo que escribio el usuario a la funcion y lo guardo en una variable
const response = numberType(chosenNumber);
//muestro el resultado
alert(response);
*/

/* 2) Crear un programa que pida al usuario que ingrese un numero y le devuelva un mensaje
indicando si el numero es primo o no */
// const primeNumber = (number) => {
// 	const parsedNumber = +number;

// 	if (!parsedNumber && parsedNumber !== 0) {
// 		alert('El valor ingresado no es un numero');
// 		return message;
// 	}

// 	//si ingresa un numero menor a 2 es false, porque 1 no es numero primo
// 	if (parsedNumber < 2) {
// 		return false;
// 	}

// 	//excluimos el 0 y el 1, por eso solo arrancamos en 2,
// 	//iteramos desde el 2 hasta el numero que sea que haya ingresado el usuario
// 	for (let i = 2; i < parsedNumber; i++) {
// 		//y vemos si podemos dividir ese numero por cada iteracion,
// 		//si nos da un resto de 0 ese numero es divisible y no es primo
// 		if (parsedNumber % 1 === 0) return false;
// 	}
// 	//si no es un numero primo y retornamos true
// 	return true;
// };

// const chosenNumber = prompt('Ingrese un numero');
// const isNumberPrime = primeNumber(chosenNumber);

// //si isNumberPrime es distinto a undefined
// if (isNumberPrime !== undefined) {
// 	//si isNumberPrime es true
// 	if (isNumberPrime) {
// 		alert('El numero es primo');

// 		//si isNumberPrime es false
// 	} else {
// 		alert('El numero no es primo');
// 	}
// }

/*
3)Crear un programa que convierta la temperatura de grados celcius a faranheit y viceversa.
El usuario deberia ingresar la temperatura y a que unidad la quiere convertir.
C a F - (c x 9) /5 + 32
Fa C - (F - 32) x 5/9
*/
// const convertTemperature = (temperature, target) => {
// 	const parsedTemp = +temperature;
// 	const parsedTarget = target.toLowerCase();

// 	if (!parsedTemp && parsedTemp !== 0) {
// 		alert('El valor ingresado no es valido');
// 		return;
// 	}

// 	if (parsedTarget === 'celsius') {
// 		return (parsedTemp - 32) * 5 / 9;
// 	} else if (parsedTarget === 'faranheit') {
// 		return parsedTemp * 9 / 5 + 32;
// 	} else {
// 		alert('El formato ingresado no es valido');
// 		return;
// 	}
// };

// const temperature = prompt('Ingrese la temperatura');
// const target = prompt('Ingresa la unidad de medida que quiere convertir - celsius o faranheit');

// const response = convertTemperature(temperature, target);

// if (response !== undefined) {
// 	alert(`La temperatura en ${target.toLowerCase()} es ${response}`);
// }

/*
4)Crear un programa para calcular el total de una compra. Para ello se le
tiene que pedir al usuario que ingrese el precio de cada producto y cuando termine
que ingrese la palabra 'total'. Devolverle el total de la compra
*/
// const calcularTotal = () => {
// 	let total = 0;
// 	let subTotal;

// 	do {
// 		subTotal = prompt('Ingrese el valor del producto, para finalizar el calculo escriba total');
// 		const parsedSubtotal = +subTotal;

// 		if (parsedSubtotal) {
// 			total += parsedSubtotal;
// 		} else if (subTotal.toLowerCase() !== 'total') {
// 			alert('El valor ingresado no es un numero');
// 		}
// 		//iterar mientras sea distinto a total
// 	} while (subTotal.toLowerCase() !== 'total');

// 	return total;
// };

// const response = calcularTotal();
// alert(response);

// 5)- crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

const ageCalculator = (currentAge, birthYear) => {
	let current = +currentAge;
	let birth = +birthYear;

	const yourAge = current - birth;
	return yourAge;
};

const anioActual = prompt('Cual es el año actual?');
const anioNacimiento = prompt('Cual es tu año de nacimiento');

const tuEdad = ageCalculator(anioActual, anioNacimiento);
alert(`Tu edad Actual es ${tuEdad} años`);
