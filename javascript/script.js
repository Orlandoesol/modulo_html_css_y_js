//console.log("Hola Mundo")// Ejercicio 1: Crear un programa que pida al usuario su nombre y edad
//alert("Hola Grupo 10")

/** 
 * Comentario de bloque
*/

//Declarar variables en JavaScript
/**
 * var 
 * let 
 * const
 * 
 * alcance local
 * alcande global
 * 
 * 
 */

/* let x = 5
const PI = 3.14

console.log(x)
console.log(PI) */

/**
 * tipos de datos
 * string -> cadenas
 * number
 * Boolean
 * object
 * Array -> listas
 * Date Object
 * function
 * null -> epresenta la ausencia intencional de cualquier valor, un valor nulo o «vacío».
 * undefined -> representa una variable que no ha sido declarada
 *              o a la cual no se le ha asignado un valor.
 * BigInt -> valores numéricos que son demasiado grandes
 * Nan
*/

/**
 * Operadores Aritmeticos
 * +, -, *, /, %, **, ++, --, +=, -=, *=, /=, %=, **=
 */

/**
 * Operadores de asignacion
 * =
 * +
 * *
 * >
 */

/**
 *Operadores de comparacion
 * 
 * ==, igualdad
 * ===, igualdad y  tipo
 * !=, diferencia
 * !==, restrictivo
 * >
 * <
 * >=
 * <=
 */

/**Operadores logicos
 * && -> (Y) Devuelve true si ambos operandos son true. Si uno de los operandos es false, devuelve false.
 * || -> (O) Devuelve true si al menos uno de los operandos es true. Solo devuelve false si ambos operandos son false.
 * !  -> (NOT) Invierte el valor booleano de su operando. Si el operando es true, devuelve false, y viceversa.
 * 
 * && (AND): true solo si ambos son true.
|| (OR): true si al menos uno es true.
! (NOT): Invierte el valor booleano.
*/

/* 
let a = true;
let b = false;
console.log(a && b); // false
console.log(a && !b); // true 
  */

/* // "O"
let a = true;
let b = false;
console.log(a || b); // true
console.log(b || false); // false 
 */


/* // "NOT"
let a = true;
console.log(!a); // false
console.log(!false); // true
 */

 
//ejemplo
let usuarioAutenticado = true;// +*+=+ ; +*-=-
let tienePermisos = false;

if (usuarioAutenticado && tienePermisos) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}
