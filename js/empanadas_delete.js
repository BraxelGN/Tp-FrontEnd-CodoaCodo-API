const URL = "http://localhost:5000";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

fetch(`${URL}/empanadas?id=${id}`, {
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log(data);
    alert('Empanada eliminada correctamente');
    window.location.href = 'index.html';
});
