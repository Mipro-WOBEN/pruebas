// Manejar el envío del formulario
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Aquí puedes agregar la lógica para enviar los datos al servidor
    // Por ejemplo, usando fetch o XMLHttpRequest

    // Mostrar un mensaje de éxito
    document.getElementById('form-message').textContent = `¡Gracias, ${name}! Te contactaremos pronto a ${email}.`;
    document.getElementById('form-message').style.color = 'green';

    // Limpiar el formulario
    this.reset();
});

// Desplazamiento suave al hacer clic en el botón de llamada a la acción
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
});
