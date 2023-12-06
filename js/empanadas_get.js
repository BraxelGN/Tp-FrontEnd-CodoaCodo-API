const URL = "https://braxelgn.pythonanywhere.com/";

fetch(URL + '/empanadas') // Obtener las empanadas
    .then(res => res.json()) // Convertir la respuesta a JSON
    .then(data => { // Mostrar los datos en consola
        let html = ''; // Variable para guardar el HTML

        data.forEach(empanada => {
            html += `<tr>
                <td>${empanada.id}</td>
                <td>${empanada.coccion}</td>
                <td>${JSON.stringify(empanada.ingredientes)}</td>
                <td><a href="empanadas_put.html?id=${empanada.id}">Modificar</a></td>
                <td><button class="alert" onclick="eliminarEmpanada(${empanada.id});">Eliminar</button></td>
            </tr>`;
        });

        document.getElementById('empanadas').innerHTML = html;
    });

function eliminarEmpanada(id) {
    fetch(URL + `/empanadas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Empanada eliminada: ' + id);
            window.location.reload();
        });
}
