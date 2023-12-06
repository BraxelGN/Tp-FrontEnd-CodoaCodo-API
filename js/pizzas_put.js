const URL = "https://braxelgn.pythonanywhere.com/"; // Ajusta el puerto según el puerto de tu servidor Flask

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

fetch(URL + '/pizzas/' + id)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('id').value = data.id;
        document.getElementById('nombre').value = data.nombre;
        document.getElementById('tamaño').value = data.tamaño;
        document.getElementById('toppings').value = data.toppings.join(', '); // Convertir toppings a una cadena separada por comas
    });

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formulario);

    const pizzaData = {
        id: formData.get('id'),
        nombre: formData.get('nombre'),
        tamaño: formData.get('tamaño'),
        toppings: formData.get('toppings').split(', ').map(topping => topping.trim()) // Convertir la cadena de toppings a un array
    };

    fetch(URL + '/pizzas/' + id, {
        method: 'PUT',
        body: JSON.stringify(pizzaData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert('Pizza modificada correctamente');
        window.location.href = 'index.html'; // Redireccionar a index.html
    });
});
