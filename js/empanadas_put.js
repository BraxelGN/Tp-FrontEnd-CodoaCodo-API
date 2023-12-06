const URL = "https://braxelgn.pythonanywhere.com/"; // Ajusta el puerto según el puerto de tu servidor Flask

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

fetch(URL + '/empanadas/' + id)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('id').value = data.id;
        document.getElementById('coccion').value = data.coccion;
        document.getElementById('ingredientes').value = data.ingredientes;
    });

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formulario);

    const empanadaData = {
        id: formData.get('id'),
        coccion: formData.get('coccion'),
        ingredientes: formData.get('ingredientes')
    };

    fetch(URL + '/empanadas/' + id, {
        method: 'PUT',
        body: JSON.stringify(empanadaData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert('Empanada modificada correctamente');
        window.location.href = 'index.html'; // Redireccionar a index.html
    });
});
