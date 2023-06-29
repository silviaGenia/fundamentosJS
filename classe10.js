//Condicionales
let keyla = {
  nombre: "keyla",
  apellido: "lifszyc",
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: true,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
}
imprimirProfesiones(keyla);

//Desafio #
function imprimirSiEsMayorDeEdad(persona) {
  //Keyla es mayor de edad
  //Oh Keyla es menor de edad
  if (persona.edad >= 18) {
    console.log(`Keyla es mayor de edad por que tiene ${persona.edad} años`);
  } else {
    console.log(`Keyla no es mayor de edad por que tiene ${persona.edad} años`);
  }
}

imprimirSiEsMayorDeEdad(keyla);
