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
setTimeout(() => {
    console.log("Juan");
}, 10);
console.log("Mario");
setTimeout(() => {
    console.log("Martin"); 
}, 15);


