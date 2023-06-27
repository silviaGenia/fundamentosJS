//Desestructurar objetos
let sacha = {
  nombre: "Keyla",
  apellido: "Cespedes",
  edad: 28,
};

let dario = {
  nombre: "Juan",
  apellido: "Cespedes",
  edad: 29,
};

function imprimirNombreEnMayusculas(persona) {
  //let nombre = persona.nombre
  let { nombre } = persona;
  console.log(nombre.toUpperCase());
}
//Desafio n°2
function imprimirNombreEdad(persona) {
  let { nombre, edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad}`);
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

imprimirNombreEdad(sacha);
imprimirNombreEdad(dario);
