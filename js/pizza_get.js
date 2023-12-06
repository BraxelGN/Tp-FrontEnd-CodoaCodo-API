const URL = "https://braxelgn.pythonanywhere.com/";

fetch(URL + '/pizzas') // Obtener las pizzas
    .then(res => res.json()) // Convertir la respuesta a JSON
    .then(data => { // Mostrar los datos en consola
        let html = ''; // Variable para guardar el HTML

        data.forEach(pizza => {
            html += `<tr>
                <td>${pizza.id}</td>
                <td>${pizza.nombre}</td>
                <td>${pizza.tamanio}</td>
                <td>${JSON.stringify(pizza.toppings)}</td>
                <td><a href="pizzas_put.html?id=${pizza.id}">Modificar</a></td>
                <td><button class="alert" onclick="eliminarPizza(${pizza.id});">Eliminar</button></td>
            </tr>`;
        });

        document.getElementById('pizzas').innerHTML = html;
    });

function eliminarPizza(id) {
    fetch(URL + '/pizzas/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Pizza eliminada: ' + id);
            window.location.reload();
        });
}
    
