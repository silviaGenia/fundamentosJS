//objetos

let sacha = {
  nombre: "Keyla",
  apellido: "Cespedes",
  edad: 28,
};

let dario = {
  nombre: "Dario",
  apellido: "Cespedes",
  edad: 29,
};

function imprimirNombreEnMayusculas({ nombre }) {
  //let nombre = persona.nombre.toUpperCase();
  //console.log(nombre);
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre: "Oscar" });
