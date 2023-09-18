document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'tu_usuario' && password === 'tu_contraseña') {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});


