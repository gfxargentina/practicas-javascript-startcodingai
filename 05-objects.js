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
class Animal {
    constructor(name, isDomestic) {
        this.name = name;
        this.isDomestic = isDomestic;
        }
        speak() {
            console.log(`${this.name} hace un ruido`);
        }
}

class Dog extends Animal {
    constructor(name, age, isDomestic) {
        //trae el constructor de la clase padre
        super(name, isDomestic);
        this.age = age;        
    }

    //metodos, son funciones
    speak(){
        console.log(`${this.name} ladra y ${this.isDomestic ? "es domestico" : "es salvaje"}`)
    }

    sayAge(){
        console.log(`${this.name} tiene ${this.age}`);
    }
}

const dog = new Dog("Rulo", 5, true);
dog.speak();