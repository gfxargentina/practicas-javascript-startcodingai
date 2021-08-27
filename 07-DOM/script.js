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

// const username = document.querySelectorAll(".username");
// console.log(username);

//Manipulacion de nodos
const nombre = document.querySelector(".username");
//console.log(nombre.textContent);

//cambiar el texto
//nombre.textContent = "Luis";
nombre.innerText = "Luis";

//Acceder y modificar src imagen
const avatar = document.querySelector("#avatar");
avatar.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/1024px-The.Matrix.glmatrix.2.png";

//Introducir html con js dentro del nodo que seleccionemos
const list = document.querySelector("#repos-list");
list.innerHTML= `<li>1 Repo</li> <li>2 Repo</li>`
console.log(list.outerHTML);
console.log(list.innerHTML);