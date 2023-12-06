const URL = "https://braxelgn.pythonanywhere.com/";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

fetch(`${URL}/pizzas?id=${id}`, {
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log(data);
    alert('Pizza eliminada correctamente');
    window.location.href = 'index.html';
});
