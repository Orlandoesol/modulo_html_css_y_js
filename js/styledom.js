const boton = document.getElementById('cambiarColor')
const parrafo = document.getElementById('miParrafo')

/* boton.addEventListener('click', () => {
    //Cambiar el color del parrafo al hacer click
    const colores = ['red', 'blue', 'green', 'yellow', 'purple'];
    const color = colores[Math.floor(Math.random() * colores.length)];

    //Cambiar el contenido del parrafo
    parrafo.textContent = `El color asignado es: ${color}`;
    parrafo.style.color = color;

}); */

const colores = {
    'Rojo': 'red',
    'Verde': 'green',
    'Azul': 'blue',
    'Amarillo': 'yellow',
    'Morado': 'purple'
};

const nombreColor = Object.keys(colores);

boton.addEventListener('click', () => {
    const colorEspagnol = nombreColor[Math.floor(Math.random() * nombreColor.length)];
    const colorIngles = colores[colorEspagnol]

//Cambiar el contenido del parrafo
parrafo.textContent = `El color asignado es: ${colorEspagnol}`;
parrafo.style.color = colorIngles;
});