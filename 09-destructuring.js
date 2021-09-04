// // Destructuring
//  const names1 = ["Luis", "Juan", "Pedro"];
//  const names2 = ["Martin", "Javier", "Matias"];

  const person1 = {
    firstname: "Luis",
    job: "Developer",
   city: "Tucuman",
  };

// //Arrays, importa el orden porque es un array

// //Sin destructuring
//  const user1 = names1[0];
//  const user2 = names1[1];
//  const user3 = names1[2];

//  console.log(user1, user2, user3);

// //Con destructuring

//  const [user1, user2] = names1;

//  console.log(user1, user2);

//Objetos

//Sin destructuring
//  const user1 = person1.firstname;
//  const job = person1.job;
//  console.log(user1, job);

//Con destructuring, se extrae la key y no importa el orden

 const { firstname: user1, job } = person1;

 console.log(user1, job);