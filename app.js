document.querySelector('.Formulario').addEventListener('submit', function (e) {
    e.preventDefault(); //EVITA ENVIAR EL FORMULARIO

    let Nombre = document.getElementById("nombres");
    let Celular = document.getElementById("numero");
    let Correo = document.getElementById("correo");
    let CiudadResidencia = document.getElementById("ciudad");
    if (CiudadResidencia.value === "0" || Nombre.value === undefined || Celular.value === undefined || Correo.value === undefined) {
        alert("Por favor revisar el formulario digilenciado")
    } else {
        alert("Se acaba de enviar el repote a la zona mas cerca de la ciudad a " + CiudadResidencia.value + " con la siguiente informacion \nNombre: " + Nombre.value + "\nNumero Celular: " + Celular.value + "\nCorreo Electronico: " + Correo.value + "\nMuy pronto nos estaremos poniendo en contacto con usted");
        Nombre.value = "";
        Celular.value = "";
        Correo.value = "";
        CiudadResidencia.value = "0";
    }
})
