//Funcion principal para el menú

function mostrarMenu() {
    console.log("Seleccione una opcion: ")
    console.log("1. Usar ciclo while");
    console.log("2. Usar ciclo for");
    console.log("3. Usar ciclo do while");
    console.log("4. Usar ciclos anidados");
    console.log("5. Recorrer una lista");
    console.log("6. Contar números pares e impares");
    console.log("0. Salir");

    const opcion = parseInt(prompt("Ingrese una opcion: "))

    switch (opcion) {
        case 1:
            //C. while 
            console.log("Ciclo while")
            let i = 0
            while (i <= 10) {
                console.log(`Ciclo while iteración: ${i}`)
                i++
            }
            break;
        case 2:
            //ciclo for 
            console.log("Ciclo for")
            for (let j = 0; j <= 10; j++) {
                console.log(`Ciclo for iteración: ${j}`)
            }
            break;
        case 3:
            //ciclo do-while
            console.log("Ciclo do-while")
            let k = 0
            do {
                console.log(`Ciclo do-while iteración: ${k}`)
                k++
            } while (k <= 5)
            break;
        case 4:
            //ciclo for, anidado
            console.log("Ciclo anidado")
            for (let m = 0; m < 3; m++){
                for (let n = 0; n < 3; n++){
                    console.log(`Ciclo anidado m: ${m}, n: ${n}`)
                }
            }
            break;
        case 5:
            //forEach
            console.log("Foreach")
            const lista = ["manzana", "chontaduro" , "lulo"]
            lista.forEach((fruta, index) => {
                console.log(`index: ${index}, fruta: ${fruta}`)
            })
            break;
        case 6:
            console.log("For elemento de lista")
            const numeros = [1,2,3,4,5,6,7,8,9,10,11]
            let pares = 0
            let impares = 0
            
            for (numero of numeros){
                if (numero % 2 === 0) {
                    pares++
                } else {
                    impares++
                }
            }
            
            console.log(`Números pares son: ${pares}`)
            console.log(`Números impares son: ${impares}`)
            break;
        case 0:
            console.log("Saliendo del programa...")
            break;
        default:
            console.log("Opcion no valida, Intente de nuevo")

    }
}

mostrarMenu()








