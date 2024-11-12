/* setTimeout(() => {
    console.log("¡Hola después de 2 segundos!");
}, 5000); */

/* let intervalId = setInterval(() => {
    console.log("Esto se repite cada segundo");
}, 1000);

// Para detener el intervalo después de 5 segundos
setTimeout(() => clearInterval(intervalId), 5000); */

/* let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operación completada");
    }, 6000);
});

myPromise.then(result => {
    console.log(result); // "Operación completada"
});


async function fetchData() {
    let response = await myPromise; // Espera a que se resuelva la promesa
    console.log(response); // "Operación completada"
}

fetchData(); */

try {
    let result = someUndefinedFunction(); // Lanza un error
} catch (error) {
    console.error("Error capturado:", error.error);
}
