function calcularPromedio(notas){
    let suma = 0;

    for (let i= 0; i < notas.length ; i++){
        if (typeof notas[i] !==  'number'){ //=== ; ==
            throw new Error('La nota no es un número');
        }
        suma += notas[i];
    }
    return suma / notas.length;
}

try {
    console.log(calcularPromedio([10,9,8,7]))
    console.log(calcularPromedio([10,'9',8]))
} catch (error) {
    console.log(error.message);
}
