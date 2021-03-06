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
// const nombre = document.querySelector(".username");
// //console.log(nombre.textContent);

// //cambiar el texto
// //nombre.textContent = "Luis";
// nombre.innerText = "Luis";

// //Acceder y modificar src imagen
// const avatar = document.querySelector("#avatar");
// avatar.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/1024px-The.Matrix.glmatrix.2.png";

//Introducir html con js dentro del nodo que seleccionemos
// const list = document.querySelector("#repos-list");
// list.innerHTML= `<li>1 Repo</li> <li>2 Repo</li>`
// console.log(list.outerHTML);
// console.log(list.innerHTML);

//Modificar los estilos
//const container = document.querySelector(".container");
//console.log(container.className);

//className
//container.className = "background-black";

//classList
// container.classList.add("background-black");
// //console.log(container.classList);

// //remover una clase
// container.classList.remove("background-black");

//Toggle - agrega una clase si el elemento no la tiene o quitarsela si la tiene
//container.classList.toggle("background-black");


// const cambiarTema = () => {
//   //selecciona los textos
//   const textNodes = document.querySelectorAll(".text");
//   //selecciona el contenedor
//   const container = document.querySelector(".container");

//   // //agrega un borde a la imagen
//   // const avatar = document.querySelector("#avatar");
//   // //console.log(avatar.style);
//   // avatar.style.border = "2px solid blue";
//   // //console.log(avatar.style);

//   //cambiar el color del contenedor
//   container.classList.toggle("background-black");
//   //itera por cada elemento y con el toggle le agrega o saca el color
//   textNodes.forEach((element) => element.classList.toggle("white-text"));
//   if (container.classList.contains("background-black")) {
//     avatar.style.border = "2px solid blue"
//   } 

// };

// cambiarTema();

// //Eliminar un nodo
// const repos = document.querySelector("#repos");
// //repos.remove();

// //Crear un nodo
// const reposNode = document.createElement("h2");
// reposNode.textContent = "Texto agregado desde js";
// reposNode.classList.add("white-text", "text");

// //agregar el nodo creado al html
// const parentAside = document.querySelector("aside");
// //lo agrega al ultimo
// parentAside.appendChild(reposNode);

// //before - lo agrega antes del elemento seleccionado
// //after lo agrega despues
// const antesDelElemento = document.createElement("h2");
// antesDelElemento.textContent = "Texto creado desde js antes del elemento de abajo";
// antesDelElemento.classList.add("white-text", "text");
// repos.before(antesDelElemento);
// //repos.after(antesDelElemento);

/* 
EJERCICIO:
Utilizando el listado de repositorios que nos da la API de github , tomar el primer repositorio del listado 
y realizar las siguientes tareas:

1) Modificar el texto nombre por el nombre de usuario de github
2)agregar el avatar del usuario
3)insertar un listado de links a sus 5 primeros repositorios
*/
const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
    const response = await fetch(`${baseUrl}/repositories`);
    const jsonResponse = await response.json();
    //console.log(jsonResponse[0]);

    //retorna el primer resultado del array
    return jsonResponse[0];
}

const getRepositoriesFromOwner = async (reposEndpoint) => {
  
    //fetch al endpoint para traer los repositorios del owner seleccionado
    const reposResponse = await fetch(reposEndpoint);
    //parseo de la data para poder leerla
    const jsonReposResponse = await reposResponse.json();
    //con el slice devuelve los primeros 5 repositorios
    const responseRepos = jsonReposResponse.slice(0, 5);

    //console.log(jsonReposResponse);
    //console.log(responseRepos);
    return responseRepos;
}

const editProfile = async() => {
    const profileData = await getPublicRepositories();
    
    //trae la url del avatar de github
    const avatarUrl = profileData.owner.avatar_url;
    //trae el nombre del usuario de github
    const name = profileData.owner.login;
    

    const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);
    //console.log(userRepos);

    //selecciona el nodo con el id avatar
    const userAvatar = document.querySelector("#avatar");
    //cambia el source de la imagen por la imagen de github
    userAvatar.src = avatarUrl;

    //selecciona el nodo del html h1 del nombre
    const nameNode = document.querySelector("h1");
    //cambia el nombre por el nombre traido de github
    nameNode.textContent = name;

    //itera sobre los repositorios y los agrega al html    
    userRepos.forEach((repo) => {
        //crea un elemento con un tag html a-anchor link
        const repoNode = document.createElement("a");
        //selecciona el padre donde lo queremos agregar
        const listNode = document.querySelector("#repos-list");
        //la informacion que agregaremos
        repoNode.textContent = repo.html_url;
        repoNode.href = repo.html_url;

        //lo agrega al html
        listNode.appendChild(repoNode);
        
    })
}
editProfile();




