/*
1)Vamos a simular una carrera entre 3 personas, juan, mario y martin
. El orden de largada sera siempre el mismo:

console.log("Juan");
console.log("Mario");
console.log("Martin");

el orden de llegada se determina conforme el nombre de cada uno vaya apareciendo en la consola
de modo que el ganador sera aquel cuyo nombre sea el primero en aparecer

ACTIVIDAD: Utilizando solamente setTimeout y sin alterar el orden de largada, escribir el codigo
necesario para obtener los siguiente resultados:

Vuelta 1:
Mario
Martin
Juan

*/
//SetTimeout es una funcionalidad asincronica de la web api del navegador
// setTimeout(() => {
//     console.log("Juan");
// }, 15);
// console.log("Mario");
// console.log("Martin");

/*
Vuelta 2:
juan
Martin
Mario
*/
// console.log("Juan");
// setTimeout(() => {
//     console.log("Mario");
// }, 20);
// console.log("Martin");
/*
Vuelta 3:
Martin
Juan
Mario
*/
// setTimeout (() => console.log("juan"),10)
// setTimeout (() => console.log("Mario"),15)
// console.log("Martin");
/*
Vuelta 4:
Mario
Juan
Martin
*/
// setTimeout(() => {
//     console.log("Juan");
// }, 10);
// console.log("Mario");
// setTimeout(() => {
//     console.log("Martin"); 
// }, 15);

/*
2)-Utilizando setTimeout, crear una funcion que actue como un temporizador, haciendo una cuenta
regresiva desde el numero de segundos a 0. Para ese ejercicio no se puede utilizar nigun tipo de loop(for, while etc)
PISTA: para resolver el ejercicio pueden investigar un poco sobre funciones recursivas
*/
// const temporizador = (segundos) => {
//     setTimeout(() => {
//         if(segundos < 0) return;
//         console.log(segundos);
//         temporizador(segundos - 1);
//     }, 1000);
// };

// temporizador(10);

/*


3) Utilizando la API de github - https://api.github.com  , realizar las siguientes tareas

a- Obtener un listado de los repositorios publicos
*/
const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
    const response = await fetch(`${baseUrl}/repositories`);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse;
}

//getPublicRepositories();

/*
b-generar una funcion que a partir de la respuesta del punto anterior, retorne un array de los 
nombres de usuario de los owners de los repositorios listados
*/
// const getOwnersNames = async () => {
//     const repositories = await getPublicRepositories();
//     //console.log(repositories);
//     //iteramos por cada repositorio con el mac y devolvemos el nombre de c/u
//     const ownerNames = repositories.map((repo) => repo.owner.login);
//     console.log(ownerNames);
    
// }

// getOwnersNames();

/*
c- Tomar de la respuesta al primer repositorio y listar todos los repositorios del owner.
PISTA: Para ver el endpoint al cual deberas pegarle para traer los repositorios del owner, deberas
inspeccionar la informacion que recibas dentro del primer request
*/
const getRepositoriesFromOwner = async () => {
    const repositories = await getPublicRepositories();
    //accedo al primer elemento del array
    const firstRepository = repositories[0];

    //endpoint que traigo de firstRepository
    const reposEndpoint = firstRepository.owner.repos_url;

    //fetch al endpoint para traer los repositorios del owner seleccionado
    const reposResponse = await fetch(reposEndpoint);
    //parseo de la data para poder leerla
    const jsonReposResponse = await reposResponse.json();

    console.log(jsonReposResponse);
}

getRepositoriesFromOwner();

//JSON - Metodos
const body = {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
};

//convertir a JSON
const parsedBody = JSON.stringify(body);
console.log(body);
console.log(parsedBody);

//convertir JSON a JS
const bodyToJS = JSON.parse(parsedBody);
console.log(bodyToJS);