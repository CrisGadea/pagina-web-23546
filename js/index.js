function wpp(){
    alert("Se está queriendoo llamar a Whatsapp");
}


var form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    // Este metodo evita que se envíe el form hasta que se cumplan todas las validaciones
    e.preventDefault();

    let inputEmail = document.getElementById('inputEmail3').value;
    let inputPassword = document.getElementById('inputPassword3').value;

    console.log(inputEmail, inputPassword)

    if (inputEmail != "" || inputPassword != "") {
        alert("akjnj");
        
    } else {
        alert("Ingrese todos los campos requeridos");
        return false;
    }
})