function registrar() {
    // Obtenemos los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    // Almacenamos los datos en localStore
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("contraseña", contraseña);

    if (nombre === '' || email === '' || contraseña === '') {
        alert("Todos los campos deben de estar llenos!");
        return;
    }

    // Redireccionamos al usuario a la página de ingreso
    window.open ("registro.html", "_blank");
}
