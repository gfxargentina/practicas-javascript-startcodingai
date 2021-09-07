///SPREAD OPERATOR (...)
// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

 const person1 = {
   firstname: "Juan",
   job: "Contador",
   city: "Cordoba",
 };

// En arrays

// 1) Concatenar arrays (concat)

// const mergedArray = [...names1, ...names2];

// console.log(mergedArray);

// 2) Copia de array

// const copiedArray = [...names1];

// copiedArray.push("Marcelo");

// console.log(names1);
// console.log(copiedArray);

// 3) Obtener elementos del array

// const [user1, ...groupedUsers] = names1;

// console.log(user1);
// console.log(groupedUsers);
// console.log(names1);

//En Funciones

// const logValues = (value1, ...args) => {
//   console.log("Soy el value 1 =>", value1);

//   args.forEach((value) => console.log(value));
// };

// logValues("Hola", "Chau", "No aparezco", "Otro mas");

// En objetos

// 1) Copiar objetos
// const copiedPerson = { ...person1 };

// copiedPerson.city = "Rosario";

// console.log(copiedPerson);
// console.log(person1);

// Mergear objetos (vs object.assign())

 //const mergedObject = { ...person1, city: "Mendoza" };

 //console.log(mergedObject);

 const updatedData = {
   city: "Rosario",
   age: 30,
 };

 const mergedObject = { ...person1, ...updatedData };

 console.log(mergedObject);