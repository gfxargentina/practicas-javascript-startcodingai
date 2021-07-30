const array = [ 'ale', 'pedro', 'juan', 'cecilia', 'Beatriz', 'Charly Garcia', 'Los Redondos' ];

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
const newArray = array.slice(1, 3);
console.log(array);
console.log(newArray);
