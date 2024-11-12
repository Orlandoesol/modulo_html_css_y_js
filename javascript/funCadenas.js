let palabra = "Colombia";
console.log(palabra.toLocaleUpperCase());

let aMinusculas = 'VALLE DEL CAUCA';
console.log(aMinusculas.toLowerCase());

console.log(palabra.length)

let str = "JavaScript";
let subStr = str.substring(1, 6); // "Java"
console.log(subStr);

let str2 = "Hello, World!";
let charAtPos = str2.charAt(7); // "W"
console.log(charAtPos);

let sentence = "Hola, Mundo!";
let words = sentence.split(", "); // ["Hola", "Mundo!"]
console.log(words);

let person = { nombre: "Juan", edad: 30 };
let keys = Object.keys(person); // ["name", "age"]
console.log(keys)
let valores = Object.values(person)
console.log(valores)

console.log(Object.entries(person))

let fechaActual = new Date();
console.log(fechaActual)

console.log(fechaActual.getDate())
