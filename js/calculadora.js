function calculadora(num1, num2, operador){
    if (typeof num1 !==  'number' || typeof num2 !== 'number'){ 
        throw new Error("los valores ingresado deben ser números");
}
// %, potencia, raiz cuadrada
switch  (operador) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        if(num2 === 0) {
            throw new Error("no se puede dividir por cero");
        }
        return num1 / num2;
        default:
            throw new Error("operador no válido");
    case '%':
        return num1 % num2;
    case '**':
        return num1 ** num2;
    case 'sqrt':
        return num1**(1/num2);
    }
}

try {
    console.log(calculadora(3,5,'*'))
    console.log(calculadora(8,5,'/'))
    console.log(calculadora(0,5,'/'))
    console.log(calculadora(3,5,'+'))
    console.log(calculadora(3,8,'-'))
    console.log(calculadora(15,7,'%'))
    console.log(calculadora(8,3,'sqrt'))
    console.log(calculadora(16,2,'sqrt'))
    console.log(calculadora(3,0,'/'))
} catch (error) {
    console.log(error.message);
}