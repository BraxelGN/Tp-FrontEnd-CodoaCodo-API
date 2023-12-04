const URL = "http://localhost:5000";
const documento = document.getElementById('formulario');

documento.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(documento); // Obtener los datos del formulario

    fetch(URL + '/pizzas', { // Enviar los datos al servidor
        method: 'POST', // Metodo de envio
        body: JSON.stringify(Object.fromEntries(formData)), // Los datos del formulario en formato JSON
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json()) // Convertir la respuesta a JSON
    .then(data => { // Mostrar los datos en consola
        console.log(data);
        alert('Pizza agregada correctamente');
        window.location.href = 'index.html'; // Redireccionar a index.html
    });
});
