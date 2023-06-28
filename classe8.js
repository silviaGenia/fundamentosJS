//Desestructurar objetos
let sacha = {
  nombre: "Keyla",
  apellido: "Cespedes",
  edad: 29,
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

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

function cumpleanos(persona) {
  return {
    //"..." => operador de propagacion (Spread operator)
    ...persona,
    edad: persona.edad + 1,
  };
}
cumpleanos(sacha);
