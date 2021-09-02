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

//para acceder al valor de las key en un objeto se utilizan corchetes, ejemplo linea 38
const paletteColors = {
  red: 'rojo',
  black: 'negro',
  white: 'blanco',
  yellow: "amarillo",
  green: 'verde',
  brown: 'marron',
  purple: 'violeta',
  peru: 'peru',
}

//declara variable global
let selectedColor;

const selectColor = (event) => {
  //console.log(event.target.id);

  //guardamos el evento capturado en la variable
  selectedColor = event.target.id;
  //selecciona el elemento del DOM html
  const strongTag = document.querySelector("#selected-color");
  //cambia el elemento por el evento capturado, usa selectedColor como key para acceder al valor en español
  strongTag.textContent = paletteColors[selectedColor];
  
}

//pinta el color seleccionado en el grid
const paintSquare = (event) => {
  // console.log(event.target.id);
  // console.log(selectedColor);

  //si no hay un color seleccionado con el return mata la funcion y no hace nada
  //seletedColor arranca siendo undefined, y undefined es un valor falsy, 
  //con la negacion ! lo convierte a true
  if (!selectedColor) return;

  //selecciona el elemento del evento que viene de linea 68
  const selectedSquare = document.querySelector(`#${event.target.id}`);
  //className pisa cualquier clase que ya este en el elemento
  //agrega painterBlock que ya tenia para no perderla  y le agrega otra selectedColor que viene de linea 37
                              //con template literals interpolamos la variable selectedColor
  selectedSquare.className = `painterBlock ${selectedColor}`;
}

//pinta cuadrados con el movimiento del mouse
const paintSquareOnMove = (event) => {
  //si event.buttons es distinto a 1, no hace nada, con el return termina la funcion
  if(event.buttons !== 1) return;
  paintSquare(event);
}

//selecciona todos los elementos con la clase color
const colorSquares = document.querySelectorAll(".color");

//itera por cada uno de los elementos(square) y le agrega un addEventListener que escuche el click
//si se produce el click dispara la funcion selectColor
colorSquares.forEach((square) => square.addEventListener("click", selectColor));

//selecciona todos los elementos con la clase painterBlock
const gridSquares = document.querySelectorAll(".painterBlock");
//itera sobre cada cuadro y le agrega un addEventListener que escuche el click,
//y si hay un click dispara la funcion paintSquare linea 46
gridSquares.forEach((square) => square.addEventListener("click", paintSquare) );

gridSquares.forEach((square) => square.addEventListener("mousemove", paintSquareOnMove));