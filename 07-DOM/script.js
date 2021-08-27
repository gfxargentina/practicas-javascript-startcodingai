// DOM (Document Object Model)
// Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/#

//Acceder a un nodo

// 1- Por el tag name
// const header = document.getElementsByTagName("header");
// console.log(header);

// //2- Acceder por el nombre de la clase
// const container = document.getElementsByClassName("container");
// console.log(container);

// //3- Acceder por el id, traer el primer elemento con el id, no puede haber 2 id iguales
// const avatar = document.getElementById("avatar");
// console.log(avatar);

//4- QuerySelector , el mismo metodo para todo, selecciona solo el primer elemento

//seleccionar un tag
// const main = document.querySelector("main");
// console.log(main);

// //seleccionar una clase
// const username = document.querySelector(".username");
// console.log(username);

// //seleccionar un id
// const repos = document.querySelector("#repos");
// console.log(repos);

//5- QuerySelectorAll -selecciona todos los elementos

const username = document.querySelectorAll(".username");
console.log(username);
