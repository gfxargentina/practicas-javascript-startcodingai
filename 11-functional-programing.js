//Programacion Funcional

// const getFirstname = () => "Alexis";

// console.log(getFirstname());

// const getTwoNumber = () => 2;

// console.log(getTwoNumber() + 3);

// Inmutabilidad

// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

// const addMember = (currentMembers, newMember) => {
//   const newMemberList = [...currentMembers, newMember];
//   return newMemberList;
// };

// console.log(addMember(names1, "Marcelo"));

// console.log(names1);

// Funciones Puras

// const getRandomNumber = () => Math.random();

// const sum = (a, b) => a + b;

// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));
// console.log(sum(2, 3));

// High Order Functions

 const logResult = (result) => console.log(result);
 const alertResult = (result) => alert(result);

 const sum = (a, b, callback) => callback(a + b);

 sum(2, 3, logResult);
 sum(3, 3, alertResult);
 const names2 = ["Martin", "Javier", "Matias"];
 names2.forEach(logResult);