//existen 2 formas de declarar un objeto
//1 forma literal
// const literalObject = {
//     firstName: "Luis",
//     lastName: "Chilo"
// };

// console.log(literalObject);

// //2
// const normalObject = new Object();
// normalObject.firstName = "Susana";
// normalObject.lastName = "Gimenez";

// console.log(normalObject);

//CLASES
// class Persona {
//     constructor(firstName, city, job) {
//         this.firstName = firstName;
//         this.city = city;
//         this.job = job;
//     }
//     saludar() {
//         console.log(`Hola, soy ${this.firstName} y vivo en ${this.city}`);
//     }
// }
// //instanciar los objectos a partir de la clase Persona
// const Luis = new Persona("Luis", "Tucuman","Developer");
// const Juan = new Persona("Juan", "Rosario", "Arquitecto");

// Luis.saludar();
// Juan.saludar();

//extender una subclase desde una clase original
// class Animal {
//     constructor(name, isDomestic) {
//         this.name = name;
//         this.isDomestic = isDomestic;
//         }
//         speak() {
//             console.log(`${this.name} hace un ruido`);
//         }
// }

// class Dog extends Animal {
//     constructor(name, age, isDomestic) {
//         //trae el constructor de la clase padre
//         super(name, isDomestic);
//         this.age = age;        
//     }

//     //metodos, son funciones
//     speak(){
//         console.log(`${this.name} ladra y ${this.isDomestic ? "es domestico" : "es salvaje"}`)
//     }

//     sayAge(){
//         console.log(`${this.name} tiene ${this.age}`);
//     }
// }

// const dog = new Dog("Rulo", 5, true);
// dog.speak();

//MANIPULACION DE OBJETOS
// const person = {
//     firstName: "Luis",
//     city: "tucuman",
//     job: "Developer",
// };

//acceder a un elemento
//console.log(person.city);

//modificar un elemento
//person.city = "Salta";
//console.log(person.city);

//Object.key() - devuelve un array de las key de un objeto
// const keys = Object.keys(person);
// //console.log(keys);
// //iterar las key de un objeto
// //keys.forEach((key) => console.log(person[key]));

// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         console.log(person[key]);        
//     }
// }

//Object.values -devuelve un array de los valores del objeto
// const values = Object.values(person);
// console.log(values);
// //ahora podemos iterar el array
// values.forEach((value) => console.log(value));

//Object.assign() - permite asignar los valores de un objeto a otro objeto
// const developer = {
//     skills: "Javascript"
// };

// Object.assign(person, developer);
// console.log(person);

//Object.entries() - devuelve una matriz(arrays dentro de otro arrays) con una estructura de key values por cada elemento del objeto
// const entries = Object.entries(person);
// console.log(entries);

//OBJECT EJERCICIOS
/* 
1) Crear una clase Deportes, que reciba el atributo nombre y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es individual o por equipos

Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, el numero de integrantes
que deben formar parte de ese equipo.
Crear un metodo para mostrar el siguiente mensaje:
"Para jugar al futbol necesitas 11 jugadores por equipo"
tener en cuenta que 'futbol' y 11 son valores que pueden variar dependiendo del deporte ej.: si fuese basket serian 5 jugadores
*/

// class Deporte {
//     constructor(nombre, deporteEnEquipo){
//         this.nombre = nombre;
//         this.deporteEnEquipo = deporteEnEquipo;
//     }
    
//     nombreDeporte(){
//         console.log(`El nombre del deporte es ${this.nombre}`);
//     }

//     esDeporteDeEquipo(){
//         const mensaje = this.deporteEnEquipo ? `${this.nombre} es un deporte de equipo` : `${this.nombre} no es un deporte de equipo`;
//         console.log(mensaje);
//     }   
// }

// class DeporteDeEquipo extends Deporte {
//        constructor(nombre, jugadoresPorEquipo){
//            //traigo el nombre de la clase deporte
//            super(nombre);
//            this.jugadoresPorEquipo = jugadoresPorEquipo;
//        }
//        cuantosJugadoresPorEquipo() {
//            console.log(`Para jugar al ${this.nombre} necesitas ${this.jugadoresPorEquipo} jugadores por equipo`);
//        }
// }


// const tenis = new Deporte("tenis", false);
// tenis.nombreDeporte();
// tenis.esDeporteDeEquipo();

// const futbol = new DeporteDeEquipo("Futbol", 11);
// futbol.nombreDeporte();
// futbol.cuantosJugadoresPorEquipo();

// const basket = new DeporteDeEquipo("Basket", 5)
// basket.nombreDeporte();
// basket.cuantosJugadoresPorEquipo();

// futbol.sayName();
// futbol.esDeporteDeEquipo();
// tenis.sayName();
// tenis.esDeporteDeEquipo();

/* 
Andrea y martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa de papas fritas. Por su parte martin
lleva 1 porcion de torta, una gaseosa y 1 paquete de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS, DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.

A)mostrar por consola los productos que llevo c/u(solo el nombre del producto)

B)En el camino al picnic, la bolsa de Andrea se rompio, por lo que tuvieron que poner todo en la bolsa de martin.
Realizar el cambio correspondiente para que la bolsa de Martin tenga el total de los productos del picnic.

C)calcular el total de productos que llevaron al picnic

*/

const BolsaAndrea = {
    cervezas: 2,
    sandwiches: 2,
    papasFritas: 1,
}

const BolsaMartin = {
    torta: 1,
    gaseosa: 1,
    galletasDulces: 1,
}

console.log(BolsaAndrea, BolsaMartin);
//A
const productosMartin = Object.keys(BolsaMartin);
const productosAndrea = Object.keys(BolsaAndrea);

console.log(`Los productos de Martin son ${productosMartin}`);
console.log(`Los productos de Andrea son ${productosAndrea}`);

//B
Object.assign(BolsaMartin, BolsaAndrea);
console.log(BolsaMartin);

//C

//devuelve un array de los productos
// const productos = Object.keys(BolsaMartin)
// console.log(productos);

// //solucion 1
// let productosTotal = 0;
// productos.forEach((producto) => (productosTotal += BolsaMartin[producto]));
// console.log(`El total de productos que llevaron son ${productosTotal}`);

//solucion 2
// for (const key in BolsaMartin) {
//     if (Object.hasOwnProperty.call(BolsaMartin, key)) {
//         productosTotal += BolsaMartin[key];        
//     }
// }
// console.log(productosTotal);

//solucion 3
//extrae los valores de los productos del objeto BolsaMartin
const cantidadProductos = Object.values(BolsaMartin);
console.log(`Los valores de los productos ${cantidadProductos}`);

//el valor inicial es 0, reduce va iterando por cada valor de producto 
//y lo guarda en el acumulador y lo va sumando en cada iteracion
const totalDeProductos = cantidadProductos.reduce((acumulador, valorActual) => {
    return acumulador + valorActual
}, 0)

console.log(`En total Andrea y Martin llevaron ${totalDeProductos} productos`);



