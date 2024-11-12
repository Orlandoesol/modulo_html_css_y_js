/* 
let
const
var
*/

/* Uso de variables, funcion, if, else, return 
un programa que me diga si una persona tiene acceso 
a un evento publico o no (mayor de 18 años)
*/

// 

function validarEdad(edad){
    if (edad >= 18){
        return"Acceso permitido!";
    } else {
      return"Acceso No permitido!";
    }
}

/* console.log(validarEdad(20))
console.log(validarEdad(15)) */
let edad = prompt("Ingrese la edad: ");

edad = Number(edad);

if(isNaN(edad)){
    alert("Por favor ingrese un valor numerico");
} else {
    alert(validarEdad(edad))
}


