let x = 4,
  y = "4";

//Comparacion en JavaScript
// doble =
x == y; //true

// triple = ("siempre utilizar triple igual cuando estas en produccion")
x === y; //false

//Comparacion de Objetos

let sacha = {
  nombre: "Sacha",
};

let otraPersona = {
  nombre: "Sacha",
};

// doble =
sacha == otraPersona; //false

// triple =
sacha === otraPersona; //false

//un objeto es igual al otro objeto cuando
// queremos que de "true"
//Objeto literal
let otraPersona1 = {
  ...sacha,
};

let otraPersona2 = sacha;
otraPersona2 == sacha; //true
otraPersona2 === sacha; //true
