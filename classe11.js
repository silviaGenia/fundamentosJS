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

let juan = {
  nombre: "juan",
  apellido: "perez",
  edad: 12,
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

//La variable mayoria de edad deberia modificarse
//deberia ser un numero fijo
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

//Desafio # Resuelto por sacha
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(keyla);
imprimirSiEsMayorDeEdad(juan);
