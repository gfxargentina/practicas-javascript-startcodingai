//EJERCICIOS

/* Utilizando eventos, agregar algun efecto de hover a la 
imagen (puede ser algun cambio en la forma, un blur, 
animacion, etc). NO SE PUEDE USAR EL SELECTOR 
:hover de CSS

2) Agregar un evento al boton shuffle, de forma tal que
cuando se haha click en el mismo, se actualice el perfil con
informacion de un usuario random selecionado de la lista
de usuarios que provee el endpoint de Github.
Pista, para crear la logica de seleccion random, pueden
investigar sobre el metodo Math.random())*/

const baseUrl = "https://api.github.com";

//trae un repo random
const getRandomProfile = (profileList) => {
  //selecciona un index random, con ceil lo vuelve un numero entero
  const randomIndex = Math.ceil(Math.random() * profileList.length - 1);
  //console.log(randomIndex);
  //console.log(profileList[randomIndex]);

  const randomProfile = profileList[randomIndex];
  return randomProfile;

}

const getPublicRepositories = async () => {
    const response = await fetch(`${baseUrl}/repositories`);
    const jsonResponse = await response.json();
    
    const randomProfile = getRandomProfile(jsonResponse);
    return randomProfile;
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
    //trae la data
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

    //selecciona el padre donde lo queremos agregar
    const listNode = document.querySelector("#repos-list");
    //limpia la lista de repos del html
    listNode.innerHTML = ""

    //itera sobre los repositorios y los agrega al html    
    userRepos.forEach((repo) => {
        //crea un elemento con un tag html a-anchor link
        const repoNode = document.createElement("a");
        
        //la informacion que agregaremos
        repoNode.textContent = repo.html_url;
        repoNode.href = repo.html_url;

        //lo agrega al html
        listNode.appendChild(repoNode);
        
    })
}
editProfile();

//efecto hover
const userAvatar = document.querySelector("#avatar");

const changeImageRadius = () => {
  //const isCircle = userAvatar.classList.contains("circle-avatar");
  //console.log(isCircle);

  // if (isCircle) {
  //   userAvatar.classList.remove("circle-avatar");
  //   userAvatar.classList.add("square-avatar");
  // } else {
  //   userAvatar.classList.add("circle-avatar");
  //   userAvatar.classList.remove("square-avatar");
  // }

  //FORMA MAS EFICIENTE
  userAvatar.classList.toggle("circle-avatar");
  userAvatar.classList.toggle("square-avatar");
}

userAvatar.addEventListener("mouseenter", changeImageRadius);
userAvatar.addEventListener("mouseleave", changeImageRadius);


//BOTON SHUFFLE
const shuffleBtn = document.querySelector("button");
shuffleBtn.addEventListener("click", editProfile);
