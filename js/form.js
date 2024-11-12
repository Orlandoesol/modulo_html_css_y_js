function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if ( x == "")
        alert('El campo nombre no debe estar vacio');
    return false;
}