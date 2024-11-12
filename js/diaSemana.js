function diaSemana(dia){
    switch(dia){
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Error: Día no válido. Ingresa un numero del 1 al 7";
    }
}

/* console.log(diaSemana(4))
console.log(diaSemana(6))
console.log(diaSemana(20)) */

//prompt y alert modificar
let continuar = true;

while (continuar) {
    // Solicitar al usuario que ingrese un número del 1 al 7
    let diaIngresado = parseInt(prompt("Ingresa un número del 1 al 7 para saber el día de la semana (o ingresa 0 para salir):"));

    // Si el usuario ingresa 0, salir del bucle
    if (diaIngresado === 0) {
        continuar = false;
    } else {
        // Mostrar el resultado usando alert
        alert(diaSemana(diaIngresado));
    }
}
