function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(resultados){
        return resultados.json();
    }).then(function(resultados){
        console.log(resultados);
        var txtNombre = document.getElementById("txtNombre");
        var txtApellido = document.getElementById("txtApellido");
        var txtTelefono = document.getElementById("txtTelefono");
        var contacto = resultados[1];
        txtNombre.innerHTML = contacto.nombre;
        txtApellido.innerHTML = contacto.apellido;
        txtTelefono.innerHTML = contacto.telefono;
    });

}
