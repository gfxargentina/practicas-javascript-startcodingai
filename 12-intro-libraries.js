var dayjs = require("dayjs");

const currentDate = dayjs().format("DD-MM-YYYY");

console.log(`La fecha actual es ${currentDate}`);

const inputNombre = document.querySelector("#input-nombre").value; // Juan
//const inputApellido = document.querySelector("#input-apellido").value; // Martinez

const nombre = inputNombre.toUpperCase();
//const apellido = inputApellido.toUpperCase();

//const data = { nombreCompleto: nombre.concat(" ", apellido) };

//const nombre = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre.trim()); // 'Juan'

const dni = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre.trim()); // 'Juan'// "23.345.678"

console.log(dni.replaceAll(".", "")); // 23345898
