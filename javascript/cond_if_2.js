let password = prompt("Ingrese una contraseña")

let isValid = false

while(!isValid) {
    let hasUppercase = false//caracterres en mayuscula
    let hasNumbers = false// c. numericos
    let hasSpecialChars = false//c. especilaes *,!.$%
    let hasLowercase = false//c. minuscula

    for  (let i = 0; i < password.length; i++) {
        let char = password[i]

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true
        }else  if (char >= 'a' &&  char <= 'z') {
            hasLowercase = true
        }else if (char  >= '0' && char <= '9') {
            hasNumbers = true
        } else if (!isNaN(char) && !isFinite(char)){
            hasSpecialChars = true
        }    
    }

    if (password.length < 8){
        alert("La contraseña debe tener al menos 8  caracteres")
    } else if (!hasUppercase) {
        alert("La contraseña debe tener al menos un caracter en mayuscula")
    } else if (!hasLowercase){
        alert("La contraseña debe tener al menos un caracter en minuscula")
    } else  if (!hasNumbers) {
        alert("La contraseña debe tener al menos un caracter numerico")
    } else if  (!hasSpecialChars) {
        alert("La contraseña debe tener al menos un caracter especial")
    } else {
        isValid = true
        alert("Contraseña es invalida!")
    }

    if (!isValid){
        password = prompt("Ingrese una contraseña valida")
    }
}