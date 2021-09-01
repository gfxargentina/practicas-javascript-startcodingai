//EVENTOS

//Listado de eventos => https://developer.mozilla.org/es/docs/Web/Events

// const logo = document.querySelector(".puzzle-logo");

// const sayHello = () => {
//   alert("Hola Mundo");

//   logo.removeEventListener("click", sayHello);
// };

// // logo.onclick = () => sayHello();

// //addEventListener
// logo.addEventListener("click", sayHello);

const selectColor = (event) => {
  console.log(event.target.id);
}

//selecciona todos los elementos con la clase color
const colorSquares = document.querySelectorAll(".color");

//itera por cada uno de los elementos y le agrega un addEventListener que escuche el click
//si se produce el click dispara la funcion selectColor
colorSquares.forEach((square) => square.addEventListener("click", selectColor));