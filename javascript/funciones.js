/* 
1. Funciones Declaradas (Function Declaration)

Las funciones declaradas son las funciones tradicionales
que se definen utilizando la palabra clave function. 
Estas funciones se pueden llamar antes de ser declaradas, 
gracias al hoisting (elevación) de JavaScript.

*/

function saludar(nombre) {
    return `Hola, ${nombre}!`
}

console.log(saludar('Juan'), "Function Declaration")

/* 2. Funciones de Expresión (Function Expression)

Las funciones de expresión son funciones que se definen 
asignándolas a una variable. Estas funciones no se pueden 
llamar antes de ser declaradas, a menos que se utilice 
*/
const resta = function(a, b) {
    return a - b;
};

console.log(resta(5, 3), "Function Expression");

/* 3. Funciones Flecha (Arrow Functions)

Las funciones flecha son una forma más concisa de definir 
funciones. Se introdujeron en ES6 (2015). Son funciones 
anónimas y no tienen su propio this.
*/
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5), "Arrow Functions"); // 20

/* 
4. Funciones Constructoras (Constructor Functions)

Las funciones constructoras son funciones que se utilizan 
para crear objetos. Se definen utilizando la palabra clave 
function y se utilizan con la palabra clave new.
*/
function Persona(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }
  
  const persona1 = new Persona('Juan', 30, 'juan@gamil.com');
  console.log(persona1, "Constructor Functions");

/* 
5. Funciones Generadoras (Generator Functions)

Las funciones generadoras son funciones que devuelven un 
iterador. Se definen utilizando la palabra clave function* 
y se utilizan con la palabra clave yield.
*/
function* contador() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen = contador();
console.log("Generator Functions")
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1


/* 
6. Funciones de Fábrica (Factory Functions)

Las funciones de fábrica son funciones que devuelven un 
objeto. Se definen utilizando la palabra clave function 
y se utilizan para crear objetos.
*/
function crearPersona(nombre, edad) {
    return {
      nombre,
      edad,
      saludar: function() {
        console.log(`Hola, ${this.nombre}! tu edad es ${this.edad} años`);
      }
    };
  }
  
  const persona2 = crearPersona('Juan', 30);
  persona2.saludar(); // Output: Hola, Juan! y 30 años
  console.log(persona2, "Factory Functions"); // Output: { nombre: 'Juan', edad: 30, saludar: [Function: saludar] }
  

/* 
7. Funciones de Método (Method Functions)

Las funciones de método son funciones que se definen 
dentro de un objeto. Se utilizan para definir métodos 
que se pueden llamar desde el objeto.
*/
const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar() {
      return `Hola, ${this.nombre}! tu edad es ${this.edad}`
    }
};

console.log(persona.saludar(), "Method Functions"); // Output: Hola, Juan!


 /* 8 Funciones IIFE (Immediately Invoked Function Expressions)
 
 Son funciones que se ejecutan inmediatamente después de su creación.
 
 */

(function() {
    console.log("Esta función se ejecuta inmediatamente");
})();


/* 9. Funciones de Retorno (High Order Functions)

Las funciones de retorno son funciones que recibe o devuelven 
otras funciones. Se utilizan para crear funciones 
que pueden ser pasadas como argumentos a otras funciones.
*/
function procesarDatos(datos, funcion) {
    return datos.map(funcion);
}

const cuadrado = x => x * x;
 // [1, 4, 9, 16]
console.log(procesarDatos([1, 2, 3, 4], cuadrado), "High Order Functions");


/* . Funciones Asíncronas (Async Functions)

Las funciones asíncronas son funciones que devuelven 
una promesa. Se definen utilizando la palabra clave 
async y se utilizan con la palabra clave await.
*/
console.log("Async Functions")
const obtenerDatos = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await respuesta.json();
    return datos;
};

obtenerDatos().then(data => console.log(data));