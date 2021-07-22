/*1) triangulo de #. construir un programa que muestre un triangulo 
formado con #, de la siguiente manera:
# 
##
###
####
#####
*/
// let shape = '';

// for (let i = 1; i <= 5; i++) {
// 	shape = shape + '#';
// 	console.log(shape);
// }

/*
2) Hacer un programa que itere por los numeros 0 al 10 y nos diga si es par o impar
*/

// for (let i = 0; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`${i} es par`);
// 	} else {
// 		console.log(`${i} es impar`);
// 	}
// }

/*
3) Hacer un programa que itere del del 1 al 15. Por cada iteracion mostrar por consola lo siguiente

1- Si el numero es multiplo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
1- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
1- En los demas casos, mostrar el numero
*/
// for (let i = 1; i <= 15; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
// 	console.log('FizzBuzz');
// } else if (i % 3 === 0) {
// 	console.log('Fizz');
// } else if (i % 5 === 0) {
// 	console.log('Buzz');
// } else {
// 	console.log(i);
// }
// 	let text = '';

// 	if (i % 3 === 0) {
// 		text += 'Fizz';
// 	}
// 	if (i % 5 === 0) {
// 		text += 'Buzz';
// 	} else if (i % 3 !== 0 && i % 5 !== 0) {
// 		text = i;
// 	}
// 	console.log(text);
// }

//CODING CHALLENGE 1 - Flujo de registro
const register = confirm('Bienvenido al sitio, Haz click en ACEPTAR para registrarte');
//declaro las variables vacias
let isRegistered, userName, password;

do {
	if (register) {
		// si no hay un nombre de usuario, pedir que lo escriba
		if (!userName) {
			userName = prompt('Ingresa tu nombre de usuario');
		}
		//valida que el userName sea mayor o igual a 3
		if (userName.length >= 3) {
			//lo normaliza a minusculas
			userName = userName.toLowerCase();
			password = prompt('Ingresa tu contraseña');
			//valida que el password sea mayor o igual a 6
			if (password.length >= 6) {
				alert('Se registro correctamente');
				//le asigno valor a la variable
				isRegistered = true;
			} else {
				alert('La contraseña debe de tener al menos 6 caracteres');
				//resetea el password para que no guarde nada en la variable
				password = null;
			}
		} else {
			alert('El nombre de usuario debe de tener al menos 3 caracteres');
		}
	} else {
		alert('OK, te esperamos cuando gustes');
	}
} while (register && (!userName || !password));

//login

//los declaramos afuera para que sean variables globales y se puedan reutilizar
let loginUsername, loginPassword;

if (isRegistered) {
	let login = confirm('Haga click en ACEPTAR para iniciar sesion');
	do {
		if (login) {
			//le asigno el valor a las variables
			loginUsername = prompt('Ingresa tu usuario');

			//si loginUsername es distinto a null
			if (loginUsername !== null) {
				loginUsername = loginUsername.toLowerCase();
				loginPassword = prompt('Ingresa tu contraseña');

				//si loginPassword es igual a null cancelo el programa
				if (loginPassword === null) {
					login = false;
					//si no, valido que loginUsername y loginPassword sean iguales
					//a los datos ingresados
				} else if (loginUsername === userName && loginPassword === password) {
					alert('Inicio sesion correctamente');
				} else {
					alert('El nombre de usuario o la contraseña es incorrecto, verifique porfavor');
					//resetea las variables para que sean false
					loginUsername = null;
					loginPassword = null;
				}
			} else {
				login = false;
			}
		} else {
			alert('OK, vuelva cuando quiera');
		}
		//esta sentencia tiene que ser todo true para que se vuelva a ejecutar el do while
		//por eso negamos loginUsername y loginPassword que son false para que se pongan true, linea 109
	} while (login && (!loginUsername || !loginPassword));
}
