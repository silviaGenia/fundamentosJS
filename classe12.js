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

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad1(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}
//funcion anonima
const esMayorDeEdad2 = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
};

//Esta funcion seria un arrow functions
//esMayorDeEdad
const esMayorDeEdad3 = (persona) => persona.edad >= MAYORIA_DE_EDAD;

//Desestructuramos la arrow functions
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

//Desafio crear la funcion es menor de edad arrow function retorne la negacion de es mayor de edad
//const MENOR_DE_EDAD = 17;
//const esMenorDeEdad = ({ edad }) => edad <= MENOR_DE_EDAD;
const esMenorDeEdad = (persona) => !esMayorDeEdad(persona);

//Desafio # Resuelto por sacha
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log("ACCESO DENEGADO");
  }
}

imprimirSiEsMayorDeEdad(keyla);
imprimirSiEsMayorDeEdad(juan);

//permitirAcceso(sacha);
permitirAcceso(juan);
