let ciudad = "New York";
let clima;
let comida;
let moneda;

if  (ciudad === "Barcelona") {
    clima = "por estaciones";
    comida = "Impresionante, pero  no me gusta";
    moneda = "Euros";
}
if (ciudad === "Cali") {
    clima = "Tropical, calido y seco";
    comida = "deliciosa y muy rica";
    moneda = "Pesos Colombianos";
}
if (ciudad === "New York") {
    clima = "frio, de -10°C en los montes Adirondack y  0 °C en la ciudad";
    comida = "Deliciosa, pero no me gusta el tamaño de las porciones"; 
    moneda = "Dólares Americanos";
}

let message = "Esta es la ciudad de " + ciudad + "; tiene un clima " +
                clima + "; su comida es " + comida + ", su moneda es " + moneda

console.log(message)
