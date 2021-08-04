const array = [ 'Ale', 'pedro', 'juan', 'Cecilia', 'Beatriz', 'Charly Garcia', 'Los Redondos', 'patricio rey', 'cecilia' ];

//buscar el ultimo elemento de un array
// const lastElement = array[array.length - 1];
// console.log(lastElement);

// //con el indexOf buscamos el indice del elemento en el array

// const elemento = 'juan';

// const index = array.indexOf(elemento);

// console.log(index);

//Agregar un elemento al final del array
// array.push('Susana');
// console.log(array);

// //remover un elemento del final del array
// array.pop();
// console.log(array);

// //agregar o mover un elemento al principio del array
// array.unshift('Patricio Rey');
// console.log(array);

// array.unshift('Susana');
// console.log(array);

// //remover un elemento del principio del array
// array.shift();
// console.log(array);

//remover varios elementos de un array
//indicar en que numero de indice comienza y la cantidad de lugares
//comienza en el index 1 y borra 2 elementos del array, index 1 e index 2
// console.log(array);
// array.splice(1, 2);
// console.log(array);

//recortar un array, solo deja los index especificados, el ultimo index(3) tambien lo saca, extraigo un pedazo del array
//el array original no se modifica
// const newArray = array.slice(1, 3);
// console.log(array);
// console.log(newArray);

//iterar sobre un array con FOR
// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

//iterar sobre un array con forEach, el forEach no devuelve nada, no se lo puede guardar en una variable
// array.forEach((item) => {
// 	console.log(item);
// });

//sin map
// const newArray = [];

// array.forEach((name) => {
// 	const newString = `Nombre: ${name}`
// 	newArray.push(newString);
// })

// console.log(newArray);

//con map, devuelve un nuevo array, por cada elemento(name) va a retornar lo que esta en el return de la funcion
// const newArrayWithMap = array.map((name) => {
// 	return `Nombre: ${name}`
// })

// console.log(newArrayWithMap);

//FILTER - filtrar, devuelve un resultado segun la condicion si es true o false y devuelve todos los valores
// const filteredArray = array.filter((name) => {
// 	return name === 'cecilia'
// })

// console.log(filteredArray);

//FIND - te devuelve el primer valor de la condicion, no importa que haya muchos valores iguales
// const existingElement = array.find((name) => {
// 	return name === 'nicolas';
// });

// console.log(existingElement);
// if (existingElement) {
// 	console.log("El nombre esta en la lista");
// } else {
// 	console.log("el nombre no esta en la lista");
// }

//SORT - para ordenar un array, tambien puede recibir una funcion
// const numbers = [125, 25,45,90,78,31,27]
// const orderedArray = numbers.sort((a, b) => {
// 	return a - b
// });
// console.log(orderedArray);

//REDUCE
//sin reduce
//const numbers = [10, 20, 30, 40];
//suma de numbers
// let total = 0;
// numbers.forEach((number) => (total += number));
// console.log(total);

//con reduce, el 0 es el valor inicial
// const total = numbers.reduce((acumulador, valorActual) => {
// 	console.log("Acumulador:", acumulador);
// 	console.log("Valor actual:", valorActual);
// 	console.log("Aca termina la iteracion");
// 	return acumulador + valorActual;
// }, 0)
//suma del array numbers
// const total = numbers.reduce((acumulador, valorActual) => {
// 	return acumulador + valorActual;
// }, 0)

// console.log(total);

/* 
Dada la siguiente lista de invitados en ese orden:

Lucas,
Matias,
Jose,
Pedro,
Martina,
Marcelo,
Esteban,
Marcela,
Martin

1- informar por consola el numero de invitados
*/
const invitados = ["Lucas", "Matias","Jose", "Pedro", "Martina", "Marcelo","Esteban", "Marcela", "Martin"];
//console.log(`La cantidad de invitados es de ${invitados.length} personas`);

/*
2- imprimir por consola el nombre del ultimo invitado
*/
//console.log(`El ultimo invitado de la fiesta es ${invitados[invitados.length - 1]}`);

/*
3- a ultimo momento se invito a Pedro a la fiesta, por lo que hay que agregarlo al final de la lista.
*/
invitados.push("Pedro");
// console.log(invitados);

/*
4- media hora antes de empezar Marcela confirmo que no podia asistir. Generar una nueva lista que 
contenga los invitados que confirmaron su presencia.
*/
const nuevaListaInvitados = invitados.filter((firstName) => firstName !== "Marcela");
//console.log(nuevaListaInvitados);

/*
5-Por cada invitado, asignarle un numero de orden conforme su posicion en la lista. Mostrar este numero de
orden en un nuevo array de la siguiente manera: "Juan. Orden: 1"
*/
// const listaOrdenada = nuevaListaInvitados.map((firstName, index) => {
// 	return ` ${firstName}. orden: ${index}`
// });
// console.log(listaOrdenada);

/*
6-Suponiedo que los invitados consumieron la siguiente cantidad de platos

Lucas: 3 platos
Esteban: 1 platos
Jose: 1 plato
Los  restantes: 4 platos

calcular el numero total de platos consumidos al final de la fiesta
*/
const platosTotales = nuevaListaInvitados.reduce((acumulador, valorActual) => {
	//reduce itera por c/u de los nombres del array y si encuentra a lucas le suma 3 al acumulador que esta en 0, linea 186
	//y asi el acumulador se va modificando segun la condicion que pongamos
	if (valorActual === "Lucas") {
		return acumulador + 3
		//a esteban y jose le suma 1
	} else if (valorActual === "Esteban" || valorActual === "Jose" ) {
		return acumulador + 1 
		//en todos los demas nombres le suma 4
	} else {
		return acumulador + 4
	}
}, 0)
console.log(`El numero total de platos consumidos es de ${platosTotales}`);

//6- acomodar los invitados por orden alfabetico
const invitadosOrdenados = nuevaListaInvitados.sort();
console.log(invitadosOrdenados);





